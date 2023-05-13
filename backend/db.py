import psycopg2
from flask import current_app, g

import click
from flask.cli import with_appcontext


def get_db():
    if 'db' not in g:
        dbname = current_app.config['DATABASE_NAME']
    try:
        g.db = psycopg2.connect(dbname=dbname)
    except Exception as e:
        print("hello"+e)
    return g.db


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_db():
    db = get_db()
    f = current_app.open_resource("sql/create.sql")
    sql_code = f.read().decode("ascii")
    cursor = db.cursor()
    cursor.execute(sql_code)
    from .user import User
    user = User(id=0, mail="thapas_b190478cs@nitc.ac.in",
                name="Thapas P Pramod", admin=True)

    cursor.execute("insert into users (email, name_, admin_) values (%s,%s,%s)",
                   (user.mail, user.name, user.admin))
    cursor.close()
    db.commit()
    close_db()


@click.command('initdb', help="initialise the db")
@with_appcontext
def init_db_command():
    init_db()
    click.echo('db initialised')


def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)
