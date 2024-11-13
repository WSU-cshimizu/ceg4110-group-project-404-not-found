from . import db
from datetime import date


# db.Table only allows a simple M-M relationship.
"""
class ExerciseRoutine(db.Model):
    __tablename__ = 'exercise_routine'

    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), primary_key=True)
    routine_id = db.Column(db.Integer, db.ForeignKey('routines.id'), primary_key=True)
    sets = db.Column(db.Integer, nullable=False)
    reps = db.Column(db.Integer, nullable=False)

    exercise = db.relationship("Exercise", backref="exercise_routines")
    routine = db.relationship("Routine", backref="routine_exercises")
"""

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable =False)
    birthdate = db.Column(db.Date, nullable=False)
    weight = db.Column(db.Double, nullable=False)
    height = db.Column(db.Double, nullable=False)
    is_male = db.Column(db.Boolean, nullable = False)
    routines = db.relationship('Routine', backref='user') 
    eaten_food = db.relationship('Food', backref='user')
    goales = db.relationship('Goal', backref='user')

    def __repr__(self):
        return f"<User {self.name}>"

# one to many with User
class Routine(db.Model):
    __tablename__ = 'routines'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String, nullable=False)
    exercises = db.relationship('Exercise', backref='routine')
    _days = db.Column(db.String, default='')
    
    # [monday, tuesday, wednesday,...] python
    # "monday;tuesday;wednesday" db

    @property
    def days(self):
        return[str(x) for x in self._days.split(';')]

    @days.setter
    def days(self, list_value):
        if not type(list_value) is list:
            raise TypeError('Value is not a list')
        if not all(isinstance(item, str) for item in list_value):
            raise TypeError('All values in list must be str')
        self._days = ";".join(list_value)

    def __repr__(self):
        return f"<Routine name {self.name}>"
    

# one to many with routine 
class Exercise(db.Model):
    __tablename__ = 'exercises'
    
    id = db.Column(db.Integer, primary_key=True)
    routine_id = db.Column(db.Integer, db.ForeignKey('routines.id'))
    name = db.Column(db.String, unique=True, nullable=False)
    type = db.Column(db.String, nullable=False)
    duration = db.Column(db.Double, default=0)
    calories_burned = db.Column(db.Double, default=0)
    video_url = db.Column(db.String, unique=True, nullable=False)
    date = db.Column(db.DateTime)

    def __repr__(self):
        return f"<Exercise name {self.name}>"

# One to many with user
class Food(db.Model):
    __tablename__= 'foods'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String, unique=True, nullable=False)
    meal_type = db.Column(db.String, nullable=False, default='') # breakfast, lunch, dinner, etc...
    calories = db.Column(db.Integer, nullable=False)
    proteins = db.Column(db.Integer, nullable=False)
    carbs = db.Column(db.Integer, nullable=False)
    fats = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, default=date.today)

    def __repr__(self):
        return f"<Food name {self.name}>"
    
# One to many with User
class Goal(db.Model):
    __tablename__ = 'goals' 

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    type = db.Column(db.String)
    target = db.Column(db.Double)
    progress = db.Column(db.Double)


