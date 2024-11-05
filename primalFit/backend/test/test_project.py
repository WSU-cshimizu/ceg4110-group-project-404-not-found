import sys

sys.path.append('../')
from app import app
from models import User

def test_get_api_endpoint():
    with app.test_client() as c:
        response  = c.get('/')
        assert response.status_code == 200
        assert b'Hey' in response.data

# def test_registration():
#     with app.test_client() as c:
#         response = c.post("/register", data={"email":"test@test.com", "password":"password"})
#         with app.app_context():


def test_user_initiation():
    user = User("test@test.com", "password")
    assert user.email == "test@test.com"
    assert user.password == "password"