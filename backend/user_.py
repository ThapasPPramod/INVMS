from flask import Blueprint, jsonify, redirect
from flask import render_template, current_app
from flask_login.utils import logout_user
from werkzeug.exceptions import NotFound
from datetime import datetime

from . import db
from .utils import applicationsPageOpen, votingPageOpen
bp = Blueprint("user_", "user_", url_prefix="/user_")


@bp.route('/index')
def index():
    return redirect('http://localhost:3000')
