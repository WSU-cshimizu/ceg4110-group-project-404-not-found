from datetime import date
import json

import sys

sys.path.append("..")
from app.models import User


headers={
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

    data = response.get_json()

    assert data["id"] == 1
    assert data["name"] == "user1"
    assert data["email"] == "test1@test1.com"
    assert not "password" in data
    assert data["birthdate"] == date.today()
    assert data["weight"] == 11.1
    assert data["weightGoal"] == 111.1
    assert data["height"]== 11.1
    assert data["isMale"] == True

def test_register(client):
    body = {
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
    
    data:map = response.get_json()
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

def test_get_users(client):
    response = client.get('/users')
    data:map = response.get_json()
    assert response.status_code == 200
    assert len(data) == 3

# getting a single user 
def test_get_user(client):
    response = client.get('/users/1')
    data:map = response.get_json()
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
    user_before = User.query.first().to_json()
    modified_user:map = user_before
    modified_user["name"] = 'test1'
    response = client.put('/users/1', data=json.dumps(modified_user))
    
    assert response.status_code == 200

    data:map = response.get_json()

    assert data["name"] != user_before["name"]


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
 