from flask import Blueprint, jsonify
from .models import User
from . import db

bp = Blueprint("main", __name__)


@bp.route("/")
def home():
    return "Hello, World!"

@bp.route("/add_user")
def add_user():
    # Example route to add a user to the database
    new_user = User(username="example_user", email="example@example.com")
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User added!"})

@bp.route("/users")
def get_users():
    # Example route to retrieve users from the database
    users = User.query.all()
    users_data = [{"id": user.id, "username": user.username, "email": user.email} for user in users]
    return jsonify(users_data)
