from flask import g
from flask_login import UserMixin


class User(UserMixin):
    def __init__(self, id, mail, name, admin, admin_id):
        self.id = id
        self.mail = mail
        self.name = name
        self.admin = admin
        self.admin_id = admin_id

    def get_id(self):
        return self.id

    def get_adminID(self):
        return self.admin_id

    @staticmethod
    def get(userID):
        from .db import get_db
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE id = %s", (userID,))
        user = cursor.fetchone()
        if not user:
            return None
        user = User(id=user[0], mail=user[1], name=user[2],
                    admin=user[3], admin_id=user[4])
        return user

    @staticmethod
    def registerUser(mail, name, admin=False):
        from .db import get_db
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT id, admin_ FROM user WHERE email=%s", (mail,))
        user = cursor.fetchone()
        if user == None:
            cursor.execute(
                "INSERT INTO users (name_, email, admin_, ) VALUES (name, mail, admin)")
        elif user[1]:
            cursor.execute(
                "UPDATE users admin_=%s WHERE id=%s", (True, user[0],))
        cursor.close()
        g.db.commit()

        return user[0]

    @staticmethod
    def registerAdmin(mail, name, ):
        id = User.registerUser(mail, name, True)
        from .db import get_db
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO admins(id) VALUES(%d)", (id,))
        cursor.close()
        g.db.commit()
