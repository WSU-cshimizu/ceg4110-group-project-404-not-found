from app import db
from datetime import datetime
# In this file, all the database models wiil be stored

# User Model

# Workout Model

# Routine Model

# 

# For Testing Purposes
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)

    def __repr__(self):
        return f"Event: {self.description}"
    
    def __init__(self, description):
        self.description = description