from app import create_app, db
from app.models import *  
import datetime
app = create_app()

def create_users():
    
    user1 = User(name='test1', email='test1@test1.com', birthdate=datetime.date.today(), current_weight=111.1, height=4.1, password='pass1', goal_weight=124.3, is_male=True)
    user2 = User(name='test2', email='test2@test2.com', birthdate=datetime.date.today(), current_weight=222.2, height=5.6, password='pass2', goal_weight=124.3, is_male=True)
    user3 = User(name='test3', email='test3@test3.com', birthdate=datetime.date.today(), current_weight=333.3, height=6.3, password='pass3', goal_weight=124.3, is_male=False)

    db.session.add_all([user1, user2, user3])

    ex1 = create_exercise("Push-ups","aerobic")
    db.session.add(ex1)

    routine1 = create_routine(user1, "routine1")
    db.session.add(routine1)

    food1 = create_food('Hot Dog', 123, 32,43,24)
    db.session.add(food1)

    db.session.commit()
    #print(routine1.user)
    #print(routine1.user.username)

    #print(user1.routines)
    #print(user1.routines[0])
   # print(user1.routines[0].name)
    

def create_routine(owner, name):
    return Routine(name=name, user=owner)

def create_food(name, calories, proteins, carbs, fats):
    return Food(name=name, calories=calories, proteins=proteins, carbs=carbs, fats=fats)

def create_exercise(name, type):
    return Exercise(name=name, type=type, video_url='https://www.youtube.com/watch?v=dQw4w9WgXcQ', calories=135)

with app.app_context():
    db.create_all()
    create_users()


