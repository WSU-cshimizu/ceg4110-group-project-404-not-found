from app import create_app, db
from app.models import User, Routine, Exercise, Food
from datetime import date

app = create_app()

def create_users() -> dict:
    #result:map[str,list] = {"users":[], "routines":[], "exercises":[], "foods":[]}
    result:map[str,list] = {"users":[], "routines":[], "exercises":[], "foods":[]}
    # Has two of everything
    user1:User = User(name='user1', email='test1@test1.com', password='password1', birthdate= date.today(), weight=11.1, weight_goal=111.1, height=11.1, is_male=True, activity_level = 1)
    # Has one of everything
    user2:User = User(name='user2', email='test2@test2.com', password='password2', birthdate= date.today(), weight=22.2, weight_goal=222.2, height=22.2, is_male=False,activity_level = 0)
    # Has nothing    
    user3:User = User(name='user3', email='test3@test3.com', password='password3', birthdate= date.today(), weight=33.3, weight_goal=333.3, height=33.3, is_male=True, activity_level = 2)

    result["users"] = [user1, user2, user3]

    routine1:Routine = Routine(name='Routine 1', user=user1)
    routine2:Routine = Routine(name='Routine 2', user=user1)
    routine3:Routine = Routine(name='Routine 3', user=user2)
    routine4:Routine = Routine(name='Routine 4')


    result["routines"] = [routine1, routine2, routine3, routine4]


    exercise1:Exercise = Exercise(name='Push Ups', type='aerobic', duration=12.42, video_url='youtube.com', routine=routine1)
    exercise2:Exercise = Exercise(name='Push Downs', type='aerobic', duration=12.42, video_url='google.com', routine=routine1)
    exercise3:Exercise = Exercise(name='Pull Ups', type='strength', duration=10.42, video_url='yahoo.com', routine=routine2)
    exercise4:Exercise = Exercise(name='Abs Crunch', type='endurance', duration=60, video_url='nice.com')

    result["exercises"] = [exercise1, exercise2, exercise3, exercise4]

    food1:Food = Food(name='banana', meal_type='breakfast', calories=50, user=user1)
    food2:Food = Food(name='strawberry', meal_type='lunch', calories=30, user=user1)
    food3:Food = Food(name='chocolate', meal_type='snack', calories=0, user=user2)
    food4:Food = Food(name='pizza', meal_type='dinner', calories=200)

    result["foods"] = [food1, food2, food3, food4]
    
    return result

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        result:dict = create_users()
        db.session.add_all([*result["users"], *result["routines"],  *result["exercises"], *result["foods"]])
        db.session.commit()
        print("Tables and data have been created successfully")

   


