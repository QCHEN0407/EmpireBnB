import datetime
from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)

    review = db.Column(db.Text, nullable=False)

    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())

    user = db.relationship("User", back_populates="reviews")
    listing = db.relationship("Listing", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
            "review": self.review,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "user": self.user,
            "listing": self.listing
        }
