from flask import Blueprint, jsonify
from app.models import Listing

listing_routes = Blueprint('listings', __name__)

@listing_routes.route('/')
def listings():
    listings = Listing.query.all()
    return {"listings": [listing.to_dict() for listing in listings]}

@listing_routes.route('/<int:id>')
def listing(id):
    listing = Listing.query.get(id)
    return listing.to_dict()
