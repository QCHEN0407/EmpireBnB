import datetime
from .db import db

class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=True, nullable=False)
    description = db.Column(db.Text, nullable=False)
    type = db.Column(db.String(20), nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    price = db.Column(db.Float, nullable=False)
    num_guests = db.Column(db.Interger, nullable=False)
    num_beds = db.Column(db.Interger, nullable=False)
    num_baths = db.Column(db.Interger, nullable=False)
    city = db.Column(db.String(30), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    rating = db.Column(db.Numeric(3,2), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())
    host = db.relationship("User", back_populates="listings")


    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "host_id": self.host_id,
            "price": self.price,
            "num_guests": self.num_guests,
            "num_beds": self.num_beds,
            "city": self.city,
            "state": self.state,
            "latitude": self.latitude,
            "longitude": self.longitude,

        }
