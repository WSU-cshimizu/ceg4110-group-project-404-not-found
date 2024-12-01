from . import db
from datetime import date

class User(db.Model):
    __tablename__ = 'users'

    id:int = db.Column(db.Integer, primary_key=True)
    name:str = db.Column(db.String, unique=True, nullable=False)
    email:str = db.Column(db.String, unique=True, nullable=False)
    password:str = db.Column(db.String, nullable =False)
    birthdate = db.Column(db.Date, nullable=False)
    weight:float = db.Column(db.Double, nullable=False)
    weight_goal:float = db.Column(db.Double, nullable=False)
    height:float = db.Column(db.Double, nullable=False)
    is_male:bool = db.Column(db.Boolean, nullable = False)
    activity_level:int = db.Column(db.Integer,  default = 0)
    #0 = sedentary, 1 = lightly active, 2 = active, 3 = very active
    routines = db.relationship('Routine', backref='user') 
    eaten_food = db.relationship('Food', backref='user')
    calorie_goal:int = db.Column(db.String, nullable=False, default = 0)
    carbohydrate_goal:int = db.Column(db.String, nullable=False, default = 0)
    protein_goal:int = db.Column(db.String, nullable=False, default = 0)

    def __repr__(self):
        return f"<User {self.name}>"
    
    def to_json(self):
        return{
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "birthdate": str(self.birthdate),
            "weight": self.weight,
            "weightGoal": self.weight_goal,
            "height": self.height,
            "isMale": self.is_male,
            "routines":  [routine.to_json() for routine in self.routines],
            "eatenFood": [food.to_json() for food in self.eaten_food],
            "calorieGoal": self.calorie_goal,
            "carbohydrateGoal": self.carbohydrate_goal,
            "proteinGoal": self.protein_goal
        }

# one to many with User
class Routine(db.Model):
    __tablename__ = 'routines'

    id:int = db.Column(db.Integer, primary_key=True)
    user_id:int = db.Column(db.Integer, db.ForeignKey('users.id'))
    name:str = db.Column(db.String, nullable=False)
    exercises = db.relationship('Exercise', backref='routine')
    _days:str = db.Column(db.String, default='')
    
    # [monday, tuesday, wednesday,...] python
    # "monday;tuesday;wednesday" db

    @property
    def days(self) -> list[str]:
        if not self._days:
            return None
        return[str(x) for x in self._days.split(';')]

    @days.setter
    def days(self, list_value:list[str]):
        if not type(list_value) is list:
            raise TypeError('Value is not a list')
        if not all(isinstance(item, str) for item in list_value):
            raise TypeError('All values in list must be str')
        self._days = ";".join(list_value)

    def __repr__(self):
        return f"<Routine name {self.name}>"
    
    def to_json(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "name": self.name,
            "exercises": [e.to_json() for e in self.exercises],
            "days": self.days
        }
    

# one to many with routine 
class Exercise(db.Model):
    __tablename__ = 'exercises'
    
    id:int = db.Column(db.Integer, primary_key=True)
    routine_id:int = db.Column(db.Integer, db.ForeignKey('routines.id'))
    name:str = db.Column(db.String, unique=True, nullable=False)
    type:str = db.Column(db.String, nullable=False)
    duration:float = db.Column(db.Double, default=0)
    calories_burned:float = db.Column(db.Double, default=0)
    video_url:str = db.Column(db.String, unique=True, nullable=False)
    date = db.Column(db.DateTime, default=date.today)

    def __repr__(self):
        return f"<Exercise name {self.name}>"
    
    def to_json(self):
        return {
            "id": self.id,
            "routineId": self.routine_id,
            "name": self.name,
            "type": self.type,
            "duration": self.duration,
            "caloriesBurned": self.calories_burned,
            "videoUrl": self.video_url,
            "date": self.date
        }

# One to many with user
class Food(db.Model):
    __tablename__= 'foods'

    id:int = db.Column(db.Integer, primary_key=True)
    user_id:int = db.Column(db.Integer, db.ForeignKey('users.id'))
    name:str = db.Column(db.String, nullable=False)
    meal_type:str = db.Column(db.String, nullable=False, default='') # breakfast, lunch, dinner, etc...
    calories:int = db.Column(db.Integer, nullable=False)
    protein:int = db.Column(db.Integer, nullable=False, default=0)
    carbs:int = db.Column(db.Integer, nullable=False, default=0)
    fats:int = db.Column(db.Integer, nullable=False, default=0)
    date = db.Column(db.DateTime, default=date.today)

    def __repr__(self):
        return f"<Food name {self.name}>"
    
    def to_json(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "name": self.name,
            "mealType": self.meal_type,
            "calories": self.calories,
            "protein": self.protein,
            "carbs": self.carbs,
            "fats": self.fats,
            "date": self.date
        }