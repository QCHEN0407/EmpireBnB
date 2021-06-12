from app.models import db, Listing

# Adds a demo user, you can add other users here if you want
def seed_listings():

    listings = [
        {
            "id": "1",
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
            "id": "2",
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
            "id": "3",
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
            "id": "4",
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
            "id": "5",
            "title": "Charming East Village One Bedroom Flat",
            "description": "Lovely location in the East Village. Super sunny, quiet apartment on a quiet block that is in prime location in the village. I have made this my home and hope you can feel the warmth and coziness of the place.",
            "type": 'Private room',
            "host_id":'9',
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
            "id": "6",
            "title": "2-bed brownstone duplex + garden",
            "description": "Spacious and charming townhouse duplex with south-facing garden, wood-burning fireplace, full laundry in unit, 2 large bedrooms, and 2 full bathrooms. Excellent accommodations for a family or for sharing. Street-level entrance provides easy accessibility with strollers or for the less mobile. It is not handicapped accessible, but is definitely easy for anyone who cannot do steps.",
            "type": 'Entire home',
            "host_id":'4',
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
        {
            "id": "7",
            "title": "Cottage by the Water",
            "description": "Entire house with 2 bedroom, 1.5 bath, HUGE bathtub, separate shower space. Open kitchen with all the things you need to cook a perfect meal. A regular electrical stove with 4 burner, no oven but there’s a small toaster oven. Private chef is welcome. Dining room right by the water with huge skylights and windows that you feel like you are on a cruise, best spot for sunset and view at the starry night. AND you get occasional visit from swans, seagulls, ducks and other fancy birds.",
            "type": 'Entire home',
            "host_id":'7',
            "price": "250",
            "num_guests": "5",
            "num_beds":"3",
            "num_baths":"1.5",
            "city":"Queens",
            "state":"New York",
            "latitude":"40.7081",
            "longitude":"-73.85206",
            "rating":"4.90"
        },
        {
            "id": "8",
            "title": "2BR Flex w/CV: Cleaning CDC guidelines implemented",
            "description": "Come enjoy this bohemian chic flex 2br Loft apartment in an authentic converted 100 year old Brooklyn factory. The loft features a large open Kitchen / dinning / living area with a brand new kitchen featuring stainless steel appliances including dishwasher. There is a modern new bathroom with a large shower.",
            "type": 'Entire home',
            "host_id":'5',
            "price": "129",
            "num_guests": "4",
            "num_beds":"2",
            "num_baths":"2",
            "city":"Brooklyn",
            "state":"New York",
            "latitude":"40.66376",
            "longitude":"-73.94643",
            "rating":"4.63"
        },
        {
            "id": "9",
            "title": "Entire Garden Floor with Private Entrance & Bath",
            "description": "Experience this magnificent and modern indoor-outdoor living from a spacious garden view room with private bathroom and private entrance. Open layout with folding glass doors maximize sunlight and leafy views, all meshing wonderfully with modern upgrades such as radiant heat floors and Scandinavian interior. F, G, R trains, and the Prospect and Gowanus Expressways are minutes from your door, putting Manhattan within 15 minutes’ train ride",
            "type": 'Entire home',
            "host_id":'12',
            "price": "165",
            "num_guests": "2",
            "num_beds":"2",
            "num_baths":"1",
            "city":"Brooklyn",
            "state":"New York",
            "latitude":"40.69471",
            "longitude":"-73.96633",
            "rating":"5.0"
        },
        {
            "id": "10",
            "title": "Charming, sunny room in artist's apartment",
            "description": "Lovely room available in an artist's apartment. The room is fully furnished, the bed is very comfy. I provide fresh towels and sheets.Interior and mattresses are being exchanged frequently. The apartment is very quiet and catches plenty of daylight.",
            "type": 'Pet Allowed',
            "host_id":'8',
            "price": "50",
            "num_guests": "1",
            "num_beds":"1",
            "num_baths":"1",
            "city":"Staten Island",
            "state":"New York",
            "latitude":"40.64591",
            "longitude":"-74.083993",
            "rating":"4.76"
        },
        {
            "id": "11",
            "title": "Luxury Private 2BRs Apt Perfect for a getaway",
            "description": "Come enjoy this bohemian chic flex 2br Loft apartment in an authentic converted 100 year old Brooklyn factory. The loft features a large open Kitchen / dinning / living area with a brand new kitchen featuring stainless steel appliances including dishwasher. There is a modern new bathroom with a large shower.",
            "type": 'Pet Allowed',
            "host_id":'6',
            "price": "113",
            "num_guests": "6",
            "num_beds":"2",
            "num_baths":"2",
            "city":"Long Island City",
            "state":"New York",
            "latitude":"40.7539",
            "longitude":"-73.93419",
            "rating":"4.93"
        },
        {
            "id": "12",
            "title": "Sonder *Weekly Specials* Studio Near Zuccotti Park",
            "description": "Whether you are just getting away for the weekend or looking for an extended stay, we’re committed to creating comfortable experiences for our guests. We offer contact-free check-in and 24/7 virtual support which limits in-person interaction.",
            "type": 'Pet Allowed',
            "host_id":'2',
            "price": "211",
            "num_guests": "2",
            "num_beds":"1",
            "num_baths":"1",
            "city":"Upper East Side",
            "state":"New York",
            "latitude":"40.77736",
            "longitude":"-73.95156",
            "rating":"4.5"
        },
        {
            "id": "13",
            "title": "Dharma | Hoboken | Homey Studio + Rooftop",
            "description": "Dharma Home Suites at Novia offers fully furnished apartments to fit the needs of our guests visiting the New York Metro Area and is conveniently located in the vibrant community of Hoboken.",
            "type": 'Pet Allowed',
            "host_id":'2',
            "price": "189",
            "num_guests": "2",
            "num_beds":"2",
            "num_baths":"1",
            "city":"Hoboken",
            "state":"Jersey City",
            "latitude":"40.7429",
            "longitude":"-74.0323",
            "rating":"4.84"
        },
        {
            "id": "14",
            "title": "Modern Condo in Midtown",
            "description": "Very centrally located, modern apartment with extraordinary views of Midtown, Times Square, Statue of Liberty, Empire State Building, New Jersey, The Hudson River, World Trade Center, Ellis Island, Downtown New York and much of midtown Manhattan. Close by Subways. High ceilings, modern kitchen and bath.",
            "type": 'City view',
            "host_id":'7',
            "price": "150",
            "num_guests": "4",
            "num_beds":"1",
            "num_baths":"1",
            "city":"Midtown",
            "state":"New York",
            "latitude":"40.66376",
            "longitude":"-73.94643",
            "rating":"4.78"
        },
        {
            "id": "15",
            "title": "Brooklyn Bay: Private LUXURY LOFT. Unique stay!",
            "description": "The space is a beautiful, cozy, clean, newly renovated loft apartment in a handsome, landmark-style loft building. Right off the belt, and close to the beach side. The loft is full of natural light and has a NYC skyline view; it is fully furnished and decorated, and has central AC, and high ceilings.",
            "type": 'City view',
            "host_id":'5',
            "price": "129",
            "num_guests": "3",
            "num_beds":"2",
            "num_baths":"2",
            "city":"Brooklyn",
            "state":"New York",
            "latitude":"40.71259",
            "longitude":"-73.94189",
            "rating":"4.92"
        },
        {
            "id": "16",
            "title": "Hudson River View King Bed at Higher Floor",
            "description": "Enjoy the beautiful Hudson River View from 20th Floor and above! Our newly renovated 280 sqft room can offer unparalleled comfort, and special touches make all the difference. Relax, get some work done, and take full advantage of your stay.",
            "type": 'City view',
            "host_id":'11',
            "price": "207",
            "num_guests": "2",
            "num_beds":"1",
            "num_baths":"1",
            "city":"Manhattan",
            "state":"New York",
            "latitude":"40.80967",
            "longitude":"-73.95781",
            "rating":"4.64"
        },
        {
            "id": "17",
            "title": "Room in boutique hotel hosted by Arlo SoHor",
            "description": "Take advantage of floor-to-ceiling views over downtown Manhattan in our Queen City rooms. Well-outfitted for the modern traveler, these rooms have pegboard closets, flip-down desks, 42-inch LED TVs and glass-enclosed rain showers to help make yourself at home.",
            "type": 'City view',
            "host_id":'10',
            "price": "138",
            "num_guests": "2",
            "num_beds":"1",
            "num_baths":"1",
            "city":"Soho",
            "state":"New York",
            "latitude":"40.72394",
            "longitude":"-73.99656",
            "rating":"4.57"
        },
        {
            "id": "18",
            "title": "Catskills Blue House on Three Acre Site by Ashokan Reservoir",
            "description": "Rediscover the big outdoors via the generous outdoor space of this lovely renovated cabin. Settle into the reading nook below the open staircase or cozy up by the wood-burning stove. Or simply enjoy the rural views from the bedroom or dining area.",
            "type": 'Getaway',
            "host_id":'12',
            "price": "301",
            "num_guests": "4",
            "num_beds":"2",
            "num_baths":"2",
            "city":"West Shokan",
            "state":"New York",
            "latitude":"41.9726",
            "longitude":"-74.2676",
            "rating":"4.99"
        },
        {
            "id": "19",
            "title": "Table on Ten Studio on the Hill",
            "description": "Beautiful, contemporary studio on a quiet, remote, 23 acre hillside overlooking the Catskill Mountains. Airy, amazing light, views, peace, solitude. Nature at your doorstep. Also check out our NEW listings: Table on Ten Earth House and Table on Ten Apartment.",
            "type": 'Getaway',
            "host_id":'7',
            "price": "227",
            "num_guests": "4",
            "num_beds":"2",
            "num_baths":"2",
            "city":"South Kortright",
            "state":"New York",
            "latitude":"42.3423",
            "longitude":"-74.7170",
            "rating":"4.94"
        },
        {
            "id": "20",
            "title": "Woodstock Historic Artist Estate - The Pond House",
            "description": "Awaken to an idyllic view of trees through timber-framed picture windows. Acclaimed social realist painter Reginald Marsh's family estate is known to be unique for Woodstock with its ball shaped junipers, a pond that brackets the house, expansive lawns, a gathering of birches and 100 year old cone shaped cedar trees.",
            "type": 'Getaway',
            "host_id":'8',
            "price": "489",
            "num_guests": "5",
            "num_beds":"3",
            "num_baths":"3",
            "city":"Woodstock",
            "state":"New York",
            "latitude":"42.0373",
            "longitude":"-74.1170",
            "rating":"4.92"
        },
        {
            "id": "21",
            "title": "NEW LISTING! 2BR Oceanview Hideaway",
            "description": "New Listing in the Exclusive Corneille Estates located in Ocean Beach, Fire Island. Soak in the sun and ocean views in this Fire Island 2 bedroom peaceful retreat! Great for families, groups of friends or couples with kids.",
            "type": 'Getaway',
            "host_id":'3',
            "price": "593",
            "num_guests": "6",
            "num_beds":"4",
            "num_baths":"2",
            "city":"Ocean Beach",
            "state":"New York",
            "latitude":"40.6438",
            "longitude":"-73.1536",
            "rating":"4.82"
        },
        {
            "id": "22",
            "title": "Wildcat Mountain Cabin",
            "description": "Nestled in the heart of the Catskill mountains, this classic 1940’s Catskills cabin is a peaceful retreat close to swimming, hiking, skiing, bike rental, spa services and restaurants - bright and cozy, the perfect place to stay through all four seasons!",
            "type": 'Getaway',
            "host_id":'1',
            "price": "242",
            "num_guests": "4",
            "num_beds":"2",
            "num_baths":"1",
            "city":"Ocean Beach",
            "state":"New York",
            "latitude":"42.0402",
            "longitude":"-74.2720",
            "rating":"4.92"
        },

    ]
    for listing in listings:
        new_listing = Listing(
            title=listing['title'],
            description=listing['description'],
            type=listing['type'],
            host_id=listing['host_id'],
            price=listing['price'],
            num_guests=listing['num_guests'],
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
