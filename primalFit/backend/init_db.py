from app import create_app, db
from app.models import *  
from datetime import date

app = create_app()

def create_users():
    # Has two of everything
    user1 = User(name='user1', email='test1@test1.com', password='password1', birthdate= date.today(), weight=11.1, height=11.1, is_male=True)
    # Has one of everything
    user2 = User(name='user2', email='test2@test2.com', password='password2', birthdate= date.today(), weight=22.2, height=22.2, is_male=False)
    # Has nothing    
    user3 = User(name='user3', email='test3@test3.com', password='password3', birthdate= date.today(), weight=33.3, height=33.3, is_male=True)

    db.session.add_all([user1, user2, user3])

    routine1 = Routine(name='Routine 1', user=user1)
    routine2 = Routine(name='Routine 2', user=user2)
    routine3 = Routine(name='Routine 1', user=user3)
    routine4 = Routine(name='Routine 4')
    routine5 = Routine(name='Routine 5', user=user1)

    print('USER 1 ROUTINES:')
    print(user1.routines)

    db.session.add_all([routine1, routine2, routine3, routine4, routine5])

    exercise1 = Exercise(name='Push Ups', type='aerobic', duration=12.42, video_url='youtube.com', routine=routine1)
    exercise2 = Exercise(name='Push Downs', type='aerobic', duration=12.42, video_url='google.com', routine=routine1)
    exercise3 = Exercise(name='Pull Ups', type='strenght', duration=10.42, video_url='yahoo.com', routine=routine2)
    exercise4 = Exercise(name='Abs Crunch', type='endurance', duration=60, video_url='nice.com')

    print('USER 1 EXERCISES in ROUTINE 1:')
    print(user1.routines[0].exercises)

    db.session.add_all([exercise1, exercise2, exercise3, exercise4])

    food1 = Food(name='banana', meal_type='breakfast', calories=50, user=user1)
    food2 = Food(name='strawberry', meal_type='lunch', calories=30, user=user1)
    food3 = Food(name='chocolate', meal_type='snack', calories=0, user=user2)
    food4 = Food(name='pizza', meal_type='dinner', calories=200)

    print('USER 1 FOODS:')
    print(user1.eaten_food)

    db.session.add_all([food1, food2, food3, food4])

    goal1 = Goal(type='Weight Loss', target=145, progress=0.5, user=user1)
    goal2 = Goal(type='Endurance', target=32.543, progress=0.9, user=user1)
    goal3 = Goal(type='Muscle Gain', target=158.33, progress=0.07, user=user2)
    goal4 = Goal(type='Strenght Gain', target=80, progress=0.17)

    print('USER 1 GOALS:')
    print(user1.goals)

    db.session.add_all([goal1, goal2, goal3, goal4])

    db.session.commit()
    

with app.app_context():
    db.create_all()
    create_users()


