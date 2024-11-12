import pytest
from app import create_app, db
from app.config import TestConfig

@pytest.fixture
def app():
    app = create_app()
    app.config.from_object(TestConfig)

    with app.app_context():
        db.create_all()  # Create tables for test database
        yield app  # Provide the app to tests
        db.session.remove()
        db.drop_all()  # Drop tables after tests

@pytest.fixture
def client(app):
    return app.test_client()  # Provide a test client
