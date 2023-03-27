from flask import Flask, redirect
from flask_login import LoginManager
from flask_cors import CORS
import json
import os
from pathlib import Path


def create_app():
    app = Flask(__name__)
    CORS(app)
    file = Path(__file__).with_name('secrets.json')
    secretsJSON = open(file, 'r')
    secrets = json.load(secretsJSON)
    secretsJSON.close()
    app.config.from_mapping(
        DATABASE_NAME="invms",
        SECRET_KEY=os.urandom(24),
        GOOGLE_CLIENT_ID=secrets["client_id"],
        GOOGLE_CLIENT_SECRET=secrets["client_secret"]

    )
    app.secret_key = app.config['SECRET_KEY']

    login_manager = LoginManager()
    login_manager.init_app(app)

    from . import db
    db.init_app(app)

    from .user import User

    @login_manager.user_loader
    def load_user(userID):
        user = User.get(userID)
        return user

    from . import auth
    app.register_blueprint(auth.bp)

    @app.route("/", methods=["GET"])
    def index():
        return load_user(1)

    return app
