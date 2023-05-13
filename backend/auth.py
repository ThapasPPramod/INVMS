from flask import Blueprint, current_app, jsonify, render_template, url_for
from flask import request, redirect
from flask_login import login_user, logout_user, login_required, current_user
from google.oauth2 import id_token
from google.auth.transport import requests
from werkzeug.exceptions import NotFound

bp = Blueprint("auth", "auth", url_prefix="/auth")


@bp.route("/login/user", methods=["GET"])
def loginUser():
    next = ''
    if 'next' in request.args:
        next = request.args.get('next')

    return render_template('user_login.html', next=next)


@bp.route("/login/admin", methods=["GET"])
def loginAdmin():
    next = ''
    if 'next' in request.args:
        next = request.args.get('next')

    return render_template('admin_login.html', next=next)


@bp.route("/login/callback", methods=["POST"])
def loginCallback():
    csrf_token_cookie = request.cookies.get('g_csrf_token')
    if not csrf_token_cookie:
        return 'NO CSRF token in Cookie', 400
    csrf_token_body = request.form.get('g_csrf_token')
    if not csrf_token_body:
        return 'NO CSRF token in post body', 400
    if csrf_token_cookie != csrf_token_body:
        return 'Failed to verify double submit cookie', 400

    token = request.form.get('credential')

    try:
        idinfo = id_token.verify_oauth2_token(
            token, requests.Request(), current_app.config['GOOGLE_CLIENT_ID'])
        if idinfo['email_verified']:
            id_ = idinfo['sub']
            email = idinfo['email']
            name = idinfo['name']

            from .user import User

            userClass = request.args.get('user-class')
            if not User.get(id_):
                if userClass == "user":
                    retCode = User.createUser(
                        id=id_, name=name, mail=email, admin=False)
                    if retCode == -1:
                        return render_template('error.html', msg="You are not a registered user.", statusCode="401", title="Not Allowed"), 401
                elif userClass == "admin":
                    retCode = User.createUser(
                        id=id_, name=name, mail=email, admin=True)
                    if retCode == -1:
                        return render_template('error.html', msg="You are not a registered admin.", statusCode="401", title="Not Allowed"), 401
                else:
                    return "Invalid request format", 400

            user = User.get(id_)

            if user.admin and userClass == "user":
                return render_template('error.html', msg="You are an admin", statusCode="401", title="Not Allowed"), 401
            elif not user.admin and userClass == "admin":
                return render_template('error.html', msg="You are not a registered admin", statusCode="401", title="Not Allowed"), 401

            login_user(user)
            if 'next' not in request.args:
                if user.admin:
                    next_url = url_for('admin.index')
                else:
                    next_url = url_for('user_.index')
            else:
                if request.args.get('next') == '':
                    if user.admin:
                        next_url = url_for('admin.index')
                    else:
                        next_url = url_for('user_.index')
                else:
                    from .utils import get_safe_redirect
                    next_url = get_safe_redirect(request.args.get('next'))
            return redirect(next_url)

    except ValueError:
        return render_template('error.html', msg="invalid token", statusCode="400", title="Bad Request"), 400


@bp.route("/logout")
@login_required
def logout():
    logout_user()

    if 'next' not in request.args:
        next_url = url_for('home')
    else:
        if request.args.get('next') == '':
            next_url = url_for('home')
        else:
            from .utils import get_safe_redirect
            next_url = get_safe_redirect(request.args.get('next'))
    return redirect(next_url)


@bp.route("/get-user")
@login_required
def getUser():
    if (request.accept_mimetypes.best == "application/json"):
        return jsonify(dict(user=dict(name=current_user.name, email=current_user.mail, admin=current_user.admin)))
    else:
        raise NotFound()
