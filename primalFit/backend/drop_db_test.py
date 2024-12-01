from app import create_app, db


app = create_app("app.config.TestConfig")
with app.app_context():
    db.drop_all()
    print("Tables have been dropped successfully")