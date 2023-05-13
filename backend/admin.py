from flask import Blueprint, jsonify, redirect
from flask import render_template, current_app
from flask_login.utils import logout_user
from werkzeug.exceptions import NotFound
from .utils import admin_required
from datetime import datetime

from . import db
from .utils import applicationsPageOpen, votingPageOpen
bp = Blueprint("admin", "admin", url_prefix="/admin")


@bp.route('/index')
@admin_required
def index():
    return redirect('http://localhost:3000')
