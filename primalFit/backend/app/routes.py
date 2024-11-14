from flask import Blueprint, jsonify, request
from .models import User
from . import db

bp = Blueprint("main", __name__)


@bp.route("/")
def home():
    return "Hello, World!"

@bp.route("/users", methods =["GET"])
def get_users():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))
    return(jsonify({"users": json_users}), 200)


@bp.route("/register", methods =["POST"])
def create_user():
    name = request.json.get("name")
    email = request.json.get("email")
    password = request.json.get("password")
    birthdate = request.json.get("birthdate")
    weight = request.json.get("weight")
    weight_goal = request.json.get("weightGoal")
    height = request.json.get("height")
    is_male = request.json.get("isMale")

    if not name or not email or not password or not birthdate or not weight or not weight_goal or not height or is_male == None: 
        return(
            jsonify({"message": "Every text field must be completed"}), 400,
        ) 
    
    new_user = User(name = name, email = email, password = password, birthdate = birthdate, weight = weight, weight_goal =weight_goal, 
        height = height, is_male = is_male)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    json_values = new_user.to_json()
    return(jsonify(json_values), 201,) 

@bp.route("/login", methods =["POST"])
def login_user():
    email = request.json.get("email")
    password = request.json.get("password")

    user = User.query.filter(User.email == email).first_or_404()
    
    if(user.password == password):
        json_values = user.to_json()
        return(jsonify(json_values), 200)
    else:
        return(jsonify({"message": "Wrong Password"}), 401)
    
    


@bp.route("/users/<id>", methods =["PATCH"])
def update_user():
    user =User.query.get(id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    data = request.json
    user.name = data.get("name", user.name)
    user.email = data.get("email", user.email)
    user.birthdate = data.get("birthdate", user.birthdate)
    user.weight = data.get("weight", user.weight)
    user.weight_goal = data.get("weightGoal", user.weight_goal)
    user.height = data.get("height", user.height)
    user.is_male = data.get("isMale", user.is_male)
    user.routines = data.get("routines", user.routines)
    user.eaten_food = data.get("eatenFood", user.eaten_food)

    db.session.commit()
    json_values = user.to_json()
    return(jsonify(json_values), 201,) 

@bp.route("/users/<id>", methods =["DELETE"])
def delete_user():
    user =User.query.get(id)

    if not user:
        return jsonify({"message": "User not found"}), 404
    
    db.session.delete(user)
    db.session.commit()
    return(204,) 