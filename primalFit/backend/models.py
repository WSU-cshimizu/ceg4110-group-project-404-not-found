from app import db
from datetime import datetime
# In this file, all the database models wiil be stored

# User Model

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(100), nullable=False)
#     password = db.Column(db.String(100), nullable=False)

#     def __init__(self, email, password):
#         self.email = email
#         self.password = password

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    userName = db.Column(db.String(80), unique=True, nullable= False)
    email = db.Column(db.String(80), unique=True, nullable= False)
    password = db.Column(db.String(80), unique = True, nullable = False)
    age = db.Column(db.Integer, nullable = False)
    weight = db.Column(db.Double, nullable =False)
    height = db.Column(db.Double, nullable = False)

    def __repr__(self):
        return f"User(name = {self.name}, email = {self.email}, age = {self.age}, weight = {self.weight}, height = {self.height})"
    
    def __init__(self, email, password):
        self.email = email
        self.password = password

class Routine(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    routineName = db.Column(db.String(80), unique=True, nullable= False)
    days = db.Column(db.String(7), unique=False, nullable =False)

    def __repr__(self):
        return f"Routine(name = {self.routineName}, days = {self.days})"
    
    def __init__(self, routineName, days):
        self.routineName = routineName
        self.days = days
    
class Exercise(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    exerciseName = db.Column(db.String(20), unique =False, nullable = False)
    type = db.Column(db.String(10), unique =False, nullable = False)
    videoUrl = db.Column(db.String(50), unique =False, nullable = False)

    def __repr__(self):
        return f"Exercise(name = {self.exerciseName}, type = {self.type})"
    
    def __init__(self, exerciseName, type, videoUrl):
        self.exerciseName = exerciseName
        self.type = type
        self.videoUrl = videoUrl

class Food(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    foodName = db.Column(db.String(20), unique = True, nullable = False)
    carb = db.Column(db.String(3), unique = False, nullable = False)
    protein = db.Column(db.String(3), unique = False, nullable = False)
    fat = db.Column(db.String(3), unique = False, nullable = False)
    calories = db.Column(db.String(4), unique = False, nullable = False)

    def __repr__(self):
        return f"Food(name = {self.foodName}, type = {self.type})"
    
    def __init__(self, foodName, carb, protein, fat, calories):
        self.foodName = foodName
        self.carb = carb
        self.protein = protein
        self.fat = fat
        self.calories = calories

# For Testing Purposes
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)

    def __repr__(self):
        return f"Event: {self.description}"
    
    def __init__(self, description):
        self.description = description