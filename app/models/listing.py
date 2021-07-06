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
    num_guests = db.Column(db.Integer, nullable=False)
    num_beds = db.Column(db.Integer, nullable=False)
    num_baths = db.Column(db.Integer, nullable=False)
    city = db.Column(db.String(30), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    rating = db.Column(db.Numeric(3,2), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())

    user = db.relationship("User", back_populates="listings")
    images = db.relationship("Image", back_populates="listing")
    bookings = db.relationship("Booking", back_populates="listing")
    reviews = db.relationship("Review", back_populates="listing")

#self: the class instance attribute
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "type": self.type,
            "host_id": self.host_id,
            "price": self.price,
            "num_guests": self.num_guests,
            "num_beds": self.num_beds,
            "num_baths": self.num_baths,
            "city": self.city,
            "state": self.state,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "rating": str(self.rating),
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "images": [image.to_dict() for image in self.images],
            "host": self.user.to_dict_simple(),
            "reviews": [review.to_dict() for review in self.reviews]
    }
