from app.models import db, Listing

# Adds a demo user, you can add other users here if you want
def seed_listings():

    listings = [
        {
            "title": "Only 2 stops to Manhattan studio",
            "description": "Our comfortable 500 sq foot (46 sq m) studio apartment with full kitchen and bath is for short term rental. The apartment is private and is in a two family house. The house is located in FABULOUS Williamsburg, Brooklyn within 10 minute travel from Manhattan. The studio is a perfect place to stay for budget minded visitors of New York City!",
            "type": 'Entire home',
            "host_id":'1',
            "price": "89",
            "num_guests": "3",
            "num_beds":"1",
            "num_baths":"1",
            "city":"Williamsburg",
            "state":"New York",
            "latitude":"40.70837",
            "longitude":"-73.95352",
            "rating":"4.56"
        },
        {
            "title": "Awsome Chelsea Studio in Perfect Location",
            "description": "This fully furnished and equipped studio in the center of Chelsea is just down the street from the Highline Park and Hudson River parks, a short walk to numerous other attractions including the Empire State Building, Madison Square Garden, Chelsea Market. Explore and enjoy New York from the comfort of this fantastic and fully outfitted apartment.",
            "type": 'Private room',
            "host_id":'2',
            "price": "140",
            "num_guests": "2",
            "num_beds":"2",
            "num_baths":"1",
            "city":"Manhattan",
            "state":"New York",
            "latitude":"40.74192",
            "longitude":"-73.99501",
            "rating":"4.99"
        },
        {
            "title": "Midtown Castle Studio Apartment in Manhattan",
            "description": "Spacious (500+ft²), immaculate and nicely furnished & designed studio.Tuck yourself into the ultra comfortable bed under the skylight. Fall in love with a myriad of bright lights in the city night sky. Additional single bed available upon request.Gorgeous pyramid skylight with amazing diffused natural light, stunning architectural details, soaring high vaulted ceilings, exposed brick, wood burning fireplace, dining floor seating area with natural zafu cushions, modern style mixed with eclectic art & antique treasures, large full bath, newly renovated kitchen, air conditioning/heat, high speed WiFi Internet, and Apple TV.",
            "type": 'Entire home',
            "host_id":'3',
            "price": "130",
            "num_guests": "2",
            "num_beds":"2",
            "num_baths":"1",
            "city":"Midtown",
            "state":"New York",
            "latitude":"40.75362",
            "longitude":"-73.98377",
            "rating":"4.80"
        },
        {
            "title": "1 Stop fr. Manhattan! Private Suite,Landmark Block",
            "description": "Private room, dedicated bath and a separate entrance! Totally renovated Queen Anne Historic Townhouse Home on a safe, Landmark Block. Only one stop from Midtown Manhattan!Enjoy the rear private Garden at breakfast time.Beautiful tree lined,quiet street. 4 subway lines ( E, M, 7 and G ) are one block away!Great restaurants, supermarket and cafes nearby.",
            "type": 'Private room',
            "host_id":'4',
            "price": "135",
            "num_guests": "4",
            "num_beds":"2",
            "num_baths":"1",
            "city":"Queens",
            "state":"New York",
            "latitude":"40.74771",
            "longitude":"-73.9474",
            "rating":"4.90"
        },
        {
            "title": "Charming East Village One Bedroom Flat",
            "description": "Lovely location in the East Village. Super sunny, quiet apartment on a quiet block that is in prime location in the village. I have made this my home and hope you can feel the warmth and coziness of the place.",
            "type": 'Private room',
            "host_id":'5',
            "price": "190",
            "num_guests": "2",
            "num_beds":"1",
            "num_baths":"1",
            "city":"East Village",
            "state":"New York",
            "latitude":"40.72828",
            "longitude":"-73.98801",
            "rating":"4.67"
        },
        {
            "title": "2-bed brownstone duplex + garden",
            "description": "Spacious and charming townhouse duplex with south-facing garden, wood-burning fireplace, full laundry in unit, 2 large bedrooms, and 2 full bathrooms. Excellent accommodations for a family or for sharing. Street-level entrance provides easy accessibility with strollers or for the less mobile. It is not handicapped accessible, but is definitely easy for anyone who cannot do steps.",
            "type": 'Entire home',
            "host_id":'6',
            "price": "202",
            "num_guests": "6",
            "num_beds":"5",
            "num_baths":"2",
            "city":"Brooklyn",
            "state":"New York",
            "latitude":"40.68035",
            "longitude":"-73.97162",
            "rating":"4.50"
        },
    ]
    for listing in listings:
        new_listing = Listing(
            title=listing['firstname'],
            description=listing['lastname'],
            type=listing['email'],
            host_id=listing['password'],
            price=listing['bio'],
            num_guests=listing['avatar'],
            num_beds=listing['num_beds'],
            num_baths=listing['num_baths'],
            city = listing['city'],
            state = listing['state'],
            latitude = listing['latitude'],
            longitude = listing['longitude'],
            rating = listing['rating']
        )

        db.session.add(new_listing)
        db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()
