import datetime
from .db import db

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.Text, nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.datetime.now())
    listing = db.relationship("Listing", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "channel_type": self.channel_type,
            "messages": {message.id: message.to_dict() for message in self.messages},
            "users": {user.id: { "name": f"{user.firstname} {user.lastname}", "avatar": user.avatar, "id": user.id } for user in self.users}
        }
