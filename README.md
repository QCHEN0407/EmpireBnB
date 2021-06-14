# Welcome to Empirebnb!

### **Live Link: [Empirebnb](https://empirebnb.herokuapp.com/)**

_Empirebnb_, a pixel perfect [Airbnb](https://www.airbnb.com/) clone, is a multi-page application that allows users to find and rent homes. Users can view browse, create, cancel and review bookings on their profile page.

### Home and About View
![Home and Search View](react-app/public/home_about.gif)

### Booking and Profile View
![Channels View](react-app/public/channels.gif)

## Prerequisites

Before you begin, please check the following Wiki documents:
* [Feature List](https://github.com/QCHEN0407/EmpireBnB/wiki/MVP-Feature-List)
* [Database Schema](https://github.com/QCHEN0407/EmpireBnB/wiki/Database-Schema)
* [API Routes](https://github.com/QCHEN0407/EmpireBnB/wiki/API-Routes)
* [Frontend Routes](https://github.com/QCHEN0407/EmpireBnB/wiki/Frontend-Routes)
* [Wireframe](https://github.com/QCHEN0407/EmpireBnB/wiki/Wire-Frames)

## Technologies used:
#### Backend
* Python
* Flask
* SQLAlchemy
* PostgreSQL
* Docker
* `wtforms`, `wtforms validators`
* `faker` for seed data

#### Frontend
* React.js
* Redux
* JavaScript
* HTML, Vanilla CSS
* Heroku (for hosting services)
* AWS (photo bucket)
* `react-icons`, `date-fns`,`font-awsome`, `nice-date`

### Code Highlights / Challenges

#### Highlights 

The way to render the upcoming trips and past trips. For past trips, I offer a review function, and for upcoming trips, I offer a cancel option.
```
{past_trips?.bookings.length > 0 ? <h2>Past trips</h2> : <h2>No past trips</h2>}
   <div className="trip_container">
      {past_trips?.bookings.map(booking =>
          <div className="trip_card">
              <img src={booking.listing.images[0].url} alt="Avatar"></img>
              <div className="tripInfo_container">
                  <h4><b>{`${parseDateString(booking.check_in)} - ${parseDateString(booking.check_out)}`}</b></h4>
                  <h3>{`${booking.listing.city}, NY`}</h3>
                  <p>{`$${booking.total_cost}`}</p>
              </div>
              <div className="button_area" onClick={()=>{handleReviewClick(booking.listing.id)}}>
                  <h4>Add Review</h4>
              </div>
          </div>
    </div>
)}
```


#### Challenges
* 

* 

## Future Implementations 
- Become a Host
- Edit & Delete reviews
- Edit user profile
- More filtered search options
- Messaging Host

## Empirebnb Developer
- [@vivianchen](https://github.com/QCHEN0407) 📹

---
_© 2021 Empirebnb. No rights reserved._
