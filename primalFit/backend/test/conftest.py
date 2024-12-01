import pytest
from app import create_app, db


import sys
sys.path.append("..")
from init_db import create_users

@pytest.fixture
def app():
    app = create_app("app.config.TestConfig")
    with app.app_context():
        db.create_all()  # Create tables for test database
        result = create_users()
        db.session.add_all([*result["users"], *result["routines"],  *result["exercises"], *result["foods"]])
        yield app  # Provide the app to tests
        db.session.remove()
        db.drop_all()  # Drop tables after tests

@pytest.fixture
def client(app):
    return app.test_client()  # Provide a test client
