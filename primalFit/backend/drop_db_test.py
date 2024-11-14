from app import create_app, db
from app.config import TestConfig


app = create_app()
app.config.from_object(TestConfig)
with app.app_context():
    db.drop_all()
    print("Tables have been dropped successfully")