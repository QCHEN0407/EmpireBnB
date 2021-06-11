from flask import Blueprint, jsonify, request
from app.models import Review, User, db
from datetime import datetime

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/', methods=['POST'])
def create_booking():
    request_json = request.get_json()
    new_review = Review(
        user_id = request_json["user_id"], 
        listing_id = request_json["listing_id"],
        review = request_json["review"]
    )
    db.session.add(new_review)
    db.session.commit()
    return request.get_json()