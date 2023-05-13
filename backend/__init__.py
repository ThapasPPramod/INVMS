from flask import Flask, Blueprint, make_response, request, jsonify
# from flask.helpers import url_for
# from flask_login import LoginManager
from flask_cors import CORS, cross_origin
import json
# import os
# from pathlib import Path
from logging import FileHandler, WARNING


def create_app():
    app = Flask(__name__, template_folder='template')
    file_handler = FileHandler('errorlog.txt')
    file_handler.setLevel(WARNING)
    CORS(app, resources={
         r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

    app.config.from_mapping(
        DATABASE_NAME="invms",

    )
    app.config['CORS_HEADERS'] = 'Content-Type'

    from . import db
    db.init_app(app)

    from .item import Item

    @app.route("/item/add", methods=["POST"])
    @cross_origin(origins='http://localhost:3000')
    def addItem():
        try:

            data = request.get_json()
            data['id'] = '0'
        except:
            ValueError

        item = Item(data["id"], data["name_"], data['date_of_purchase'], data['bill_number'], data['supplier_address'],
                    data['quantity'], data['rate'], data['amount'], data['colour'], data['warranty_period'], data['remarks'], data['admin_id'])
        print(item.name_, item.admin_id, item.id, item.supplier_address)
        try:
            conn = db.get_db()
            print("HELLO 1")

            if conn:
                print("HELLO 2")
                cursor = conn.cursor()
                cursor.execute("INSERT INTO item (name_, date_of_purchase, bill_number, supplier_address, quantity, rate, amount, colour, warranty_period, remarks, admin_id) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (item.name_, item.date_of_purchase, item.bill_number, item.supplier_address, item.quantity,
                               item.rate, item.amount, item.colour, item.warranty_period, item.remarks, item.admin_id))
                cursor.close()
                conn.commit()
                print("HELLO 3")
                db.close_db
                return "item added"
                response = jsonify("Item successfully added!")
                response.access_control_allow_credentials = True
                response.headers['Access-Control-Allow-Origin'] = '*'
                return response
            else:
                print("conn was null")
        except Exception as e:
            print("not working: ", e)

        # except:
        #     return "not working"

    @app.route("/item/getAll", methods=["GET"])
    @cross_origin(supports_credentials=True)
    def getAllItems():
        sql_code = "SELECT * FROM item"
        try:
            conn = db.get_db()
            if conn:
                cursor = conn.cursor()
                cursor.execute(sql_code)
                rows = cursor.fetchall()

                result = []
                for row in rows:
                    # print("row:", row, type(row))
                    item = Item(*row)
                    result.append(item.__dict__)
                cursor.close()
                db.close_db
                response = jsonify(result)
                response.access_control_allow_credentials = True
                return response
        except:
            return "no", 404

    @app.route("/item/<item_id>", methods=["GET"])
    @cross_origin(supports_credentials=True)
    def getItem(item_id):
        # item_id = int(item_id)
        print(item_id, type(item_id))
        sql_code = "SELECT * FROM item where id = %s"
        try:
            conn = db.get_db()
            if conn:
                # print("hello 1")
                cursor = conn.cursor()
                cursor.execute(sql_code, (item_id))
                row = cursor.fetchone()
                # print("row:", row, type(row))
                item = Item(*row)
                result = item.__dict__
                # print("hi", result)
                cursor.close()
                db.close_db
            response = jsonify(result)
            response.access_control_allow_credentials = True
            return response
        except:
            return "no", 404

    # from . import auth
    # app.register_blueprint(auth.bp)

    # from .user import User

    # @login_manager.user_loader
    # def load_user(userID):
    #     user = User.query.get(userID)
    #     return user

    @app.route("/", methods=["GET"])
    def index():
        return "hello frontend"

    return app
