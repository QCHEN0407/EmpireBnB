from app.models import db, Review

def seed_reviews():
    reviews = [
        {
            "user_id":1,
            "listing_id":1,
            "review":"When we first stumbled upon this flat on AirBnB, it seemed almost too good to be true. There must be a catch! But everything was as perfect as it seemed online. The host is the most thoughtful, gracious host."
        },
        {
            "user_id":2,
            "listing_id":2,
            "review":"Very tidy and lovely AirBnb apartment equipped with everything you need. A good bed and nice bathroom. The host is a great host and there when you need him, Very nice and wants to share all hé know about the area. We had a great stay!"
        },
        {
            "user_id":3,
            "listing_id":3,
            "review":"We had a great time at the host place. The communication was super easy and quick and the place looks exactly like it does on the pictures. The neighborhood is very conveniently located and although it’s a lively neighborhood the apartment is very quiet! Would absolutely recommend to stay there!"
        },
        {
            "user_id":4,
            "listing_id":4,
            "review":"The host place is at a perfect location, very easy to get around with public transportation and walking distance to awesome bars and restaurants. His place is great, very clean and has everything you need. (Host Name) was also very helpful since the beginning, available at all times whenever I had any questions. Totally recommend it."
        },
        {
            "user_id":1,
            "listing_id":5,
            "review":"The host place is perfect for a stay in (Location Name). The location was great. It’s literally a 5 minute walk to the metro station but it’s also very central. To be honest I️ rarely used public transportation because it was always convenient to just walk but when I️ needed to it was right there."
        },
        {
            "user_id":2,
            "listing_id":6,
            "review":"The host is incredible. He was very accommodating and very quick to respond with any questions. He is also flexible with check-in and check-out time, which was extremely helpful. The place was very clean and had all of the necessities for a few night stay."
        },
        {
            "user_id":3,
            "listing_id":1,
            "review":"Couldn’t have been better. Apartment was beautiful and equipped with everything I needed (and lots of lovely touches / local design). The host was very helpful and the location was great."
        },
        {
            "user_id":4,
            "listing_id":2,
            "review":"I found this place to be very clean, comfortable, and perfectly sized for one to two people. The bathroom and shower was excellent. You could tell that the host made sure that the apartment is very clean. Furthermore, they clearly explained the area, and also arranged a taxi for me from the apartment to the airport after I checked out. For this price, I honestly think this is a bargain. I am looking forward to staying here again one day."
        },
        {
            "user_id":1,
            "listing_id":3,
            "review":"We are a regular Airbnb travelers and would rate Edit & Dado’s place as one of the nicest, best located, and real value of all the places we have stayed. The place was very clean, modern, had everything we needed to feel at home, and was an easy walk to all the sites we wanted to see. Also close to a big supermarket which was handy, and few steps to dozens of restaurants and cafes. Communication was great too. We would highly recommend this wonderful apartment."
        },
        {
            "user_id":2,
            "listing_id":4,
            "review":"The apartment is very nice and comfortable! Location is very convenient, near shops and public transport. (Host Name) was very helpful and friendly, he’s a super host!"
        },
        {
            "user_id":3,
            "listing_id":5,
            "review":"The host's place is a quiet, clean, spacious and calming place. It is very near the (Touristic Attraction) and close to all the lovely restaurants and bars of the area. But you can’t hear the noise of the streets in the apartment. The whole place made us feel at ease. (Host Name) was very nice, easy to talk to and very friendly when he welcomed us. I would definitely come again!"
        },
        {
            "user_id":4,
            "listing_id":6,
            "review":"The neighborhood outside the apartment had a lot of life within walking distances. However, it was very quiet when you were in the loft. The apartment was walking distance to some tourist attractions, and it was close to many metros to get you to the ones further away. This is definitely the perfect place to stay in NYC."
        },
        {
            "user_id":5,
            "listing_id":7,
            "review":"The neighborhood outside the apartment had a lot of life within walking distances. However, it was very quiet when you were in the loft. The apartment was walking distance to some tourist attractions, and it was close to many metros to get you to the ones further away. This is definitely the perfect place to stay in NYC."
        },
        {
            "user_id":3,
            "listing_id":7,
            "review":"The host's place is a quiet, clean, spacious and calming place. It is very near the (Touristic Attraction) and close to all the lovely restaurants and bars of the area. But you can’t hear the noise of the streets in the apartment. The whole place made us feel at ease. (Host Name) was very nice, easy to talk to and very friendly when he welcomed us. I would definitely come again!"
        },
        {
            "user_id":1,
            "listing_id":8,
            "review":"We are a regular Airbnb travelers and would rate Edit & Dado’s place as one of the nicest, best located, and real value of all the places we have stayed. The place was very clean, modern, had everything we needed to feel at home, and was an easy walk to all the sites we wanted to see. Also close to a big supermarket which was handy, and few steps to dozens of restaurants and cafes. Communication was great too. We would highly recommend this wonderful apartment."
        },
        {
            "user_id":6,
            "listing_id":8,
            "review":"We are a regular Airbnb travelers and would rate Edit & Dado’s place as one of the nicest, best located, and real value of all the places we have stayed. The place was very clean, modern, had everything we needed to feel at home, and was an easy walk to all the sites we wanted to see. Also close to a big supermarket which was handy, and few steps to dozens of restaurants and cafes. Communication was great too. We would highly recommend this wonderful apartment."
        },
        {
            "user_id":3,
            "listing_id":8,
            "review":"We had a great time at the host place. The communication was super easy and quick and the place looks exactly like it does on the pictures. The neighborhood is very conveniently located and although it’s a lively neighborhood the apartment is very quiet! Would absolutely recommend to stay there!"
        },
        {
            "user_id":7,
            "listing_id":9,
            "review":"The host's place is a quiet, clean, spacious and calming place. It is very near the (Touristic Attraction) and close to all the lovely restaurants and bars of the area. But you can’t hear the noise of the streets in the apartment. The whole place made us feel at ease. (Host Name) was very nice, easy to talk to and very friendly when he welcomed us. I would definitely come again!"
        },
        {
            "user_id":4,
            "listing_id":9,
            "review":"The host place is at a perfect location, very easy to get around with public transportation and walking distance to awesome bars and restaurants. His place is great, very clean and has everything you need. (Host Name) was also very helpful since the beginning, available at all times whenever I had any questions. Totally recommend it."
        },
        {
            "user_id":1,
            "listing_id":10,
            "review":"When we first stumbled upon this flat on AirBnB, it seemed almost too good to be true. There must be a catch! But everything was as perfect as it seemed online. The host is the most thoughtful, gracious host."
        },
        {
            "user_id":8,
            "listing_id":10,
            "review":"Very tidy and lovely AirBnb apartment equipped with everything you need. A good bed and nice bathroom. The host is a great host and there when you need him, Very nice and wants to share all hé know about the area. We had a great stay!"
        },
        {
            "user_id":9,
            "listing_id":10,
            "review":"We had a great time at the host place. The communication was super easy and quick and the place looks exactly like it does on the pictures. The neighborhood is very conveniently located and although it’s a lively neighborhood the apartment is very quiet! Would absolutely recommend to stay there!"
        },
        {
            "user_id":10,
            "listing_id":11,
            "review":"We are a regular Airbnb travelers and would rate Edit & Dado’s place as one of the nicest, best located, and real value of all the places we have stayed. The place was very clean, modern, had everything we needed to feel at home, and was an easy walk to all the sites we wanted to see. Also close to a big supermarket which was handy, and few steps to dozens of restaurants and cafes. Communication was great too. We would highly recommend this wonderful apartment."
        },
        {
            "user_id":4,
            "listing_id":11,
            "review":"The neighborhood outside the apartment had a lot of life within walking distances. However, it was very quiet when you were in the loft. The apartment was walking distance to some tourist attractions, and it was close to many metros to get you to the ones further away. This is definitely the perfect place to stay in NYC."
        },
        {
            "user_id":1,
            "listing_id":12,
            "review":"When we first stumbled upon this flat on AirBnB, it seemed almost too good to be true. There must be a catch! But everything was as perfect as it seemed online. The host is the most thoughtful, gracious host."
        },
        {
            "user_id":4,
            "listing_id":12,
            "review":"The host place is at a perfect location, very easy to get around with public transportation and walking distance to awesome bars and restaurants. His place is great, very clean and has everything you need. (Host Name) was also very helpful since the beginning, available at all times whenever I had any questions. Totally recommend it."
        },
        {
            "user_id":11,
            "listing_id":13,
            "review":"We are a regular Airbnb travelers and would rate Edit & Dado’s place as one of the nicest, best located, and real value of all the places we have stayed. The place was very clean, modern, had everything we needed to feel at home, and was an easy walk to all the sites we wanted to see. Also close to a big supermarket which was handy, and few steps to dozens of restaurants and cafes. Communication was great too. We would highly recommend this wonderful apartment."
        },
        {
            "user_id":12,
            "listing_id":13,
            "review":"The host place is perfect for a stay in (Location Name). The location was great. It’s literally a 5 minute walk to the metro station but it’s also very central. To be honest I️ rarely used public transportation because it was always convenient to just walk but when I️ needed to it was right there."
        },
        {
            "user_id":3,
            "listing_id":14,
            "review":"The host's place is a quiet, clean, spacious and calming place. It is very near the (Touristic Attraction) and close to all the lovely restaurants and bars of the area. But you can’t hear the noise of the streets in the apartment. The whole place made us feel at ease. (Host Name) was very nice, easy to talk to and very friendly when he welcomed us. I would definitely come again!"
        },
        {
            "user_id":9,
            "listing_id":15,
            "review":"Couldn’t have been better. Apartment was beautiful and equipped with everything I needed (and lots of lovely touches / local design). The host was very helpful and the location was great."
        },
        {
            "user_id":12,
            "listing_id":15,
            "review":"The host's place is a quiet, clean, spacious and calming place. It is very near the (Touristic Attraction) and close to all the lovely restaurants and bars of the area. But you can’t hear the noise of the streets in the apartment. The whole place made us feel at ease. (Host Name) was very nice, easy to talk to and very friendly when he welcomed us. I would definitely come again!"
        },
        {
            "user_id":11,
            "listing_id":16,
            "review":"The host place is perfect for a stay in (Location Name). The location was great. It’s literally a 5 minute walk to the metro station but it’s also very central. To be honest I️ rarely used public transportation because it was always convenient to just walk but when I️ needed to it was right there."
        },
        {
            "user_id":9,
            "listing_id":16,
            "review":"We had a great time at the host place. The communication was super easy and quick and the place looks exactly like it does on the pictures. The neighborhood is very conveniently located and although it’s a lively neighborhood the apartment is very quiet! Would absolutely recommend to stay there!"
        },
        {
            "user_id":8,
            "listing_id":17,
            "review":"Very tidy and lovely AirBnb apartment equipped with everything you need. A good bed and nice bathroom. The host is a great host and there when you need him, Very nice and wants to share all hé know about the area. We had a great stay!"
        },
        {
            "user_id":10,
            "listing_id":17,
            "review":"The host's place is a quiet, clean, spacious and calming place. It is very near the (Touristic Attraction) and close to all the lovely restaurants and bars of the area. But you can’t hear the noise of the streets in the apartment. The whole place made us feel at ease. (Host Name) was very nice, easy to talk to and very friendly when he welcomed us. I would definitely come again!"
        },
        {
            "user_id":6,
            "listing_id":18,
            "review":"The host place is at a perfect location, very easy to get around with public transportation and walking distance to awesome bars and restaurants. His place is great, very clean and has everything you need. (Host Name) was also very helpful since the beginning, available at all times whenever I had any questions. Totally recommend it."
        },
        {
            "user_id":12,
            "listing_id":19,
            "review":"When we first stumbled upon this flat on AirBnB, it seemed almost too good to be true. There must be a catch! But everything was as perfect as it seemed online. The host is the most thoughtful, gracious host."
        },
        {
            "user_id":1,
            "listing_id":20,
            "review":"The host place is at a perfect location, very easy to get around with public transportation and walking distance to awesome bars and restaurants. His place is great, very clean and has everything you need. (Host Name) was also very helpful since the beginning, available at all times whenever I had any questions. Totally recommend it."
        },
        {
            "user_id":11,
            "listing_id":20,
            "review":"We had a great time at the host place. The communication was super easy and quick and the place looks exactly like it does on the pictures. The neighborhood is very conveniently located and although it’s a lively neighborhood the apartment is very quiet! Would absolutely recommend to stay there!"
        },

    ]

    for each_review in reviews:
        new_review = Review(
            user_id = each_review['user_id'],
            listing_id = each_review['listing_id'],
            review = each_review['review']
        )

        db.session.add(new_review)
        db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()