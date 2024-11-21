from datetime import date
import json
import copy

import sys

sys.path.append("..")
from app.models import User, Routine


headers: dict = {
    'Content-type':'application/json', 
    'Accept':'application/json'
}

def test_home(client):
    response = client.get("/")
    assert response.status_code == 200
    assert b"Hello, World!" in response.data

def test_login(client):
    body = {"email":"test1@test1.com", "password":"password1"}
    response = client.post("/login", data=json.dumps(body), headers=headers)

    #User(name='user1', email='test1@test1.com', password='password1', birthdate= date.today(), weight=11.1, weight_goal=111.1, height=11.1, is_male=True)

    assert response.status_code == 200

    data:dict = response.get_json()

    assert data["id"] == 1
    assert data["name"] == "user1"
    assert data["email"] == "test1@test1.com"
    assert not "password" in data
    assert data["birthdate"] == str(date.today())
    assert data["weight"] == 11.1
    assert data["weightGoal"] == 111.1
    assert data["height"]== 11.1
    assert data["isMale"] == True

def test_register(client):
    body:dict = {
        "name":"user4",
        "email":"user4@user4.com",
        "password":"password4",
        "birthdate":str(date.today()),
        "weight":80,
        "weightGoal":120,
        "height":5.9,
        "isMale":True
    }
    response = client.post("/register", data= json.dumps(body), headers=headers)
    
    data:dict = response.get_json()
    assert response.status_code == 201
    assert data["id"] == 4
    assert data["name"] == "user4"
    assert data["email"] == "user4@user4.com"
    assert not "password" in data 
    assert data["birthdate"] == str(date.today())
    assert data["weight"] == 80
    assert data["weightGoal"] == 120
    assert data["height"]== 5.9
    assert data["isMale"] == True

def test_get_all_users(client):
    response = client.get('/users')
    data:dict = response.get_json()
    print(len(data["users"]))
    assert response.status_code == 200
    assert len(data["users"]) == 3

# getting a single user 
def test_get_user(client):
    response = client.get('/users/1', headers=headers)
    data:dict = response.get_json()
    assert response.status_code == 200
    assert data["id"] == 1
    assert data["name"] == "user1"
    assert data["email"] == "test1@test1.com"
    assert not "password" in data
    assert data["birthdate"] == date.today()
    assert data["weight"] == 11.1
    assert data["weightGoal"] == 111.1
    assert data["height"]== 11.1
    assert data["isMale"] == True

def test_put_user(client):
    user_before:dict = User.query.first().to_json()
    modified_user:dict = copy.deepcopy(user_before)
    modified_user["name"] = 'test1'
    response = client.put('/users/1', data=json.dumps(modified_user), headers=headers)
    
    assert response.status_code == 200

    data:dict = response.get_json()

    assert data["name"] != user_before["name"]

def test_patch_user(client):
    user_before:dict = User.query.first().to_json()
    
    response = client.patch('/users/1', data=json.dumps({"email":"t1@t1.com", "weight":195}), headers=headers)

    assert response.status_code == 200
    
    data:dict = response.get_json()

    assert data["email"] != user_before["email"]
    assert data["weight"] != user_before["weight"]

def test_delete_user(client):

    user_to_delete:int = 3
    response = client.delete(f"/users/{user_to_delete}")

    assert response.status_code == 204

    no_user = User.query.filter(User.id == user_to_delete).count()

    assert no_user == 0

def test_get_all_routines(client):
    user_id = 1
    response = client.get(f"/users/{user_id}/routines")

    assert response.status_code == 200

    data:dict = response.get_json()

    assert "routines" in data

def test_get_routine(client):
    user_id = 1
    routine_id = 1
    response = client.get(f"/users/{user_id}/routines/{routine_id}")

    assert response.status_code == 200

    data:dict = response.get_json()
    # Routine(name='Routine 1', user=user1)
    assert data["id"] == routine_id
    assert data["userId"] == user_id
    assert data["name"] == "Routine 1"

def test_post_routine(client):
    user_id = 1
    routine_name = "Test Routine"
    body:dict = {"name": routine_name, "exercises":[]}

    response = client.post(f'/users/{user_id}/routines', data=json.dumps(body), headers=headers)

    assert response.status_code == 201

    data:dict = response.get_json()
    assert data["userId"] == user_id
    assert data["name"] == routine_name
    assert len(data["exercises"]) == 0

def test_delete_routine(client):
    user_id = 1
    routine_id = 1

    response = client.delete(f"/users/{user_id}/routines/{routine_id}")
    assert response.status_code == 204

def test_put_routine(client):
    user_id = 1
    routine_id = 1
    routine_before:dict = Routine.query.filter(Routine.id == routine_id).to_json()
    modified_routine:dict = copy.deepcopy(routine_before)
    modified_routine["name"] = "Newer Name"

    response = client.put(f'/users/{user_id}/routines/{routine_id}', data=json.dumps(modified_routine), headers=headers)

    assert response.status_code == 200
    
    data:dict = response.get_json()
    assert data["id"] == routine_id
    assert data["userId"] == user_id
    assert data["name"] != routine_before["name"] 

def test_get_all_exercises(client):
    user_id:int = 1
    routine_id:int = 1

    response = client.get(f'/users/{user_id}/routines/{routine_id}/exercises')

    assert response.status_code == 200

    data:dict = response.get_json()

    assert len(data["exercises"]) == 2


#def test_post_exercises(client):



# def test_get_users(client):
#     # First, add a user
#     client.post("/add_user", data=data)

#     # Then, fetch the list of users
#     response = client.get("/users")
#     data = response.get_json()

#     assert response.status_code == 200
#     assert len(data) == 1
#     assert data[0]["username"] == "example_user"
#     assert data[0]["email"] == "example@example.com"
 