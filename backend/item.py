from flask import app, g, Blueprint, jsonify, make_response
from flask import request
import flask
from flask_cors import cross_origin
import psycopg2
from . import db
import json

bp = Blueprint("item", "item", url_prefix="/item")


class Item:
    def __init__(self, id, name_, date_of_purchase, bill_number, supplier_address, quantity, rate, amount, colour, warranty_period, remarks, admin_id):
        self.id = id
        self.name_ = name_
        self.date_of_purchase = date_of_purchase
        self.bill_number = bill_number
        self.supplier_address = supplier_address
        self.quantity = quantity
        self.rate = rate
        self.amount = amount
        self.colour = colour
        self.warranty_period = warranty_period
        self.remarks = remarks
        self.admin_id = admin_id

    # @classmethod
    # def from_json(cls, json_data):
    #     kwargs = json.loads(json_data)
    #     return cls(**kwargs)

    def getItemId(self):
        return self.id


# @bp.route("/getAll", methods=["GET", "OPTIONS"])
# @cross_origin(supports_credentials=True)
# def getAllItems():
#     sql_code = "SELECT * FROM item"
#     try:
#         conn = db.get_db()
#         if conn:
#             cursor = conn.cursor()
#             cursor.execute(sql_code)
#             rows = cursor.fetchall()
#             result = []
#             for row in rows:
#                 item = Item(*row)
#                 result.append(item.__dict__)
#             cursor.close()
#             db.close_db
#             response = jsonify(result)
#             response.access_control_allow_credentials = True
#             return response
#     except:
#         return "no", 404


# @bp.route("/add", methods=["POST", "OPTIONS"])
# @cross_origin
# def addItem():
#     if request.method == 'POST':
#         data = request.get_json()
#         item = Item(data)
#         sql_code = "INSERT INTO item (name_, date_of_purchase, bill_number, supplier_address, quantity, rate, amount, colour, warranty_period, remarks, admin_id) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (
#             item.name_, item.bill_number, item.supplier_address, item.quantity, item.rate, item.amount, item.colour, item.warranty_period, item.remarks, item.admin_id)
#         try:
#             conn = db.get_db()
#             if conn:
#                 cursor = conn.cursor()
#                 cursor.execute(sql_code)
#                 cursor.close()
#                 db.close_db
#                 response = jsonify({"message": "Item successfully added!"})
#                 response.access_control_allow_credentials = True
#                 response.headers['Access-Control-Allow-Origin'] = '*'
#                 return response
#         except:
#             return "no"
#     else:
#         response = flask.Response()
#         response.headers['Access-Control-Allow-Origin'] = '*'
#         response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
#         response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
#         return response
