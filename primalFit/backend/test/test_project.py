import sys

sys.path.append('../')
from app import app

def test_get_api_endpoint():
    with app.test_client() as c:
        response  = c.get('/')
        assert response.status_code == 200
        assert b'Hey' in response.data

