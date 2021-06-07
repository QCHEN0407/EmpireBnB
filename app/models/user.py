from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .booking import Booking

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  firstName = db.Column(db.String(40), nullable = False, unique = False)
  lastName = db.Column(db.String(40), nullable = False, unique = False)
  bio = db.Column(db.Text, nullable=True)
  avatar = db.Column(db.String(255), nullable = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)

  listings = db.relationship("Listing", back_populates="user")
  bookings = db.relationship("Booking", back_populates="user")
  reviews = db.relationship("Review", back_populates="user")

  # bookedListings = db.relationship(
  #   "Listing",
  #   secondary = bookings,
  #   back_populates="users"
  #   )

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "firstName": self.firstName,
      "lastName": self.lastName,
      "email": self.email,
      "avatar": self.avatar,
      "listings":  {listing.id: listing.to_dict() for listing in self.listings}
    }

  def to_dict_simple(self):
    return {
      "id": self.id,
      "firstName": self.firstName,
      "lastName": self.lastName,
      "email": self.email,
      "avatar": self.avatar
    }
