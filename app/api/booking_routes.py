from flask import Blueprint, jsonify, request
from app.models import Booking, User, db

booking_routes = Blueprint('bookings', __name__)

@booking_routes.route('/', methods=['POST'])
def create_booking():
    request_json = request.get_json()["booking"]
    new_booking = Booking(
        user_id = request_json["user_id"], 
        listing_id = request_json["listing_id"],
        num_guests = request_json["num_guests"],
        total_cost = request_json["total_cost"],
        check_in = request_json["check_in"],
        check_out = request_json["check_out"]
    )
    db.session.add(new_booking)
    db.session.commit()
    # print(request.get_json())
    return request.get_json()

@booking_routes.route('/<int:user_id>/bookings')
def get_bookings_by_user(user_id):
    
    return "dummy booking"



# check_in: Sat Jun 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time) {}
# check_out: Sun Jun 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time) {}
# listing_id: 1
# num_guests: 1
# user_id: 1
# total_cost