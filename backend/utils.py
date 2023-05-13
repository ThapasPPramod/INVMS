from datetime import datetime
from urllib.parse import urljoin, urlparse
from flask import request, redirect, url_for, current_app
from flask_login import current_user


def is_safe_redirect_url(target):
    host_url = urlparse(request.host_url)
    redirect_url = urlparse(urljoin(request.host_url, target))
    return (
        redirect_url.scheme in ("http", "https")
        and host_url.netloc == redirect_url.netloc
    )


def get_safe_redirect(url):
    if url and is_safe_redirect_url(url):
        return url
    url = request.referrer
    if url and is_safe_redirect_url(url):
        return url
    return "/"


def admin_required(func):
    def admin_wrapper(*args, **kwargs):
        if not current_user.is_authenticated:
            if request.accept_mimetypes.best == "application/json":
                return current_app.login_manager.unauthorized()
            return redirect("#")
        elif not current_user.admin:
            return ""
        else:
            return func(*args, **kwargs)
    admin_wrapper.__name__ = func.__name__
    return admin_wrapper
