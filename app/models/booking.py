import datetime
from .db import db

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)

    check_in = db.Column(db.DateTime, nullable=False,
                           default=datetime.date().today)
    check_out = db.Column(db.DateTime, nullable=False,
                           default=datetime.date.today() + datetime.timedelta(days=1))
    num_guests = db.Column(db.Integer, nullable=False)
    total_cost = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())
    user = db.relationship("User", back_populates="bookings")
    listing = db.relationship("Listing", back_populates="bookings")


    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
            "check_in": self.check_in,
            "check_out": self.check_out,
            "num_guests": self.num_guests,
            "total_cost": self.total_cost,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
