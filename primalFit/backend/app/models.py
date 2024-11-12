from . import db

# Many-to-Many relationship for user_food
user_food = db.Table('user_food',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('food_id', db.Integer, db.ForeignKey('foods.id'))
)

# TODO: Add "reps" and "sets" within exercise_routine table
# Many-to-Many relationship for exercise_routine
exercise_routine = db.Table('exercise_routine',
    db.Column('exercise_id', db.Integer, db.ForeignKey('exercises.id')),
    db.Column('routine_id', db.Integer, db.ForeignKey('routines.id')),
)

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
    current_weight = db.Column(db.Double, nullable=False)
    goal_weight = db.Column(db.Double, nullable=False)
    height = db.Column(db.Double, nullable=False)
    is_male = db.Column(db.Boolean, nullable = False)
    routines = db.relationship('Routine', backref='user')
    eaten_food = db.relationship('Food', secondary=user_food, backref="eaten_foods")

    def __repr__(self):
        return f"<User {self.name}>"

class Routine(db.Model):
    __tablename__ = 'routines'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    exercises = db.relationship('Exercise', secondary=exercise_routine, backref='exercises')
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

class Exercise(db.Model):
    __tablename__ = 'exercises'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    type = db.Column(db.String, nullable=False)
    video_url = db.Column(db.String, unique=True, nullable=False)
    calories = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Exercise name {self.name}>"

class Food(db.Model):
    __tablename__= 'foods'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    calories = db.Column(db.Integer, nullable=False)
    proteins = db.Column(db.Integer, nullable=False)
    carbs = db.Column(db.Integer, nullable=False)
    fats = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Food name {self.name}>"

