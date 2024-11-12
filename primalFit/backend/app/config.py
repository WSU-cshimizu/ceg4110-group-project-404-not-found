class Config:
    SECRET_KEY = "your_secret_key"
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@db/primalfit"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@db/primalfit_test"
    TESTING = True
