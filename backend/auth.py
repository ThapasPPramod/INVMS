from flask import Blueprint, current_app, jsonify
from flask import request, redirect
from flask_login import login_user, logout_user, login_required, current_user
from google.oauth2 import id_token
from google.auth.transport import requests
from werkzeug.exceptions import NotFound

bp = Blueprint("auth", "auth", url_prefix="/auth")


@bp.route("/", methods=["GET"])
def loginUser():
    next = ''
    if 'next' in request.args:
        next = request.args.get('next')

    return redirect("http://localhost:3000/loginUser")

# @bp.route("/login/callback", methods=["POST"])
# def loginCallback():
#     csrf_token_cookie = request.cookies.get('g_csrf_token')
#     if not csrf_token_cookie:
#         return 'NO CSRF token in Cookie', 400
#     csrf_token_body = request.form.get('g_csrf_token')
#     if not csrf_token_body:
#         return 'NO CSRF token in post body', 400
#     if csrf_token_cookie !=csrf_token_body:
#         return 'Failed to verify double submit cookie',400

#     token = request.form.get('credential')

#     try:
#         idinfo = id_token.verify_oauth2_token(token,requests.Request(), current_app.config['GOOGLE_CLIENT_ID'])
#         if idinfo['email_verified']:
#             id_ = idinfo['sub']
#             email = idinfo['email']
#             name = idinfo['name']

#             from .user import User

#             userClass=request.args.get('user-class')

#             if not User.get(id_):
#                 if userClass == "user":
#                     retCode = User.registerUser(id=id_, mail=email, name = name )
#                     if retCode == -1:
#                         return "not registered"
#                     elif retCode == -2:
#                         return ""
#                 elif userClass == "admin":
#                     retCode = User.registerAdmin(

#                     )
