from random import randint
# from faker import Faker
from werkzeug.security import generate_password_hash
from app.models import db, User
# fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():

    # demo = User(
    #     id=1,
    #     firstName='Demo',
    #     lastName='User',
    #     email='demo@aa.io',
    #     password='password',
    #     bio='I am the guest user, welcome to EmpireBnB!',
    #     avatar='https://slackx.s3.amazonaws.com/kimi.png'
    #     )

    # db.session.add(demo)
    # db.session.commit()

    users = [
        {
            "id":"1",
            "firstName": "Demo",
            "lastName": "User",
            "email": 'demo@aa.io',
            "password": 'password',
            "bio": "I am the guest user, welcome to EmpireBnB!",
            "avatar": "https://slackx.s3.amazonaws.com/kimi.png"
        },
        {
            "id":"2",
            "firstName": "Ren",
            "lastName": "Dracula",
            "email": 'ren@minion.com',
            "password": 'password',
            "bio": "I'm secretly the smartest person in class, and I'm the unofficial group leader",
            "avatar": "https://slackx.s3.amazonaws.com/renerose.jpg"
        },
        {
            "id":"3",
            "firstName": "Earl",
            "lastName": "Grubhub",
            "email": 'wheremy@mfood.com',
            "password": 'password',
            "bio": "I'm 75% here, and I'm hungary",
            "avatar": "https://slackx.s3.amazonaws.com/earl.jpg"
        },
        {
            "id":"4",
            "firstName": "Vivian",
            "lastName": "Cutedog",
            "email": 'cutedog@kimi.com',
            "password": 'password',
            'bio': 'I have a cute dog, and CSS-MASTER!!!!',
            "avatar": "https://slackx.s3.amazonaws.com/vivian.png"

        },
        {
            "id":"5",
            "firstName": "Nathaniel",
            "lastName": "HotPocket",
            "email": 'hotdogs@7up.com',
            "password": 'password',
            'bio': 'I love white shirts, and building games.',
            "avatar": "https://slackx.s3.amazonaws.com/nathaniel.jpg"
        },
        {
            "id":"6",
            "firstName": "Buddy",
            "lastName": "Banny",
            "email": 'buddy@zoo.com',
            "password": 'password',
            'bio': 'I love eating',
            "avatar": "https://empirebnb.s3.us-east-2.amazonaws.com/UserSeeding/Buddy.png"
        },
        {
            "id":"7",
            "firstName": "Chole",
            "lastName": "Cat",
            "email": 'chole@zoo.com',
            "password": 'password',
            'bio': 'I love chasing mouse',
            "avatar": "https://empirebnb.s3.us-east-2.amazonaws.com/UserSeeding/Chole.jpeg"
        },
        {
            "id":"8",
            "firstName": "Daisy",
            "lastName": "Feng",
            "email": 'daisy@zoo.com',
            "password": 'password',
            'bio': 'I love Kimi',
            "avatar": "https://empirebnb.s3.us-east-2.amazonaws.com/UserSeeding/daisy.png"
        },
        {
            "id":"9",
            "firstName": "Gidget",
            "lastName": "Dog",
            "email": 'Gidget@7up.com',
            "password": 'password',
            'bio': 'I am pretty',
            "avatar": "https://empirebnb.s3.us-east-2.amazonaws.com/UserSeeding/Gidget.png"
        },
        {
            "id":"10",
            "firstName": "Norman",
            "lastName": "Mole",
            "email": 'norman@mole.com',
            "password": 'password',
            'bio': 'I am Yanshu',
            "avatar": "https://empirebnb.s3.us-east-2.amazonaws.com/UserSeeding/Norman.jpeg"
        },
        {
            "id":"11",
            "firstName": "Snowball",
            "lastName": "Rabbit",
            "email": 'snowball@rabbit.com',
            "password": 'password',
            'bio': 'I love carrots',
            "avatar": "https://empirebnb.s3.us-east-2.amazonaws.com/UserSeeding/snowball.png"
        },
        {
            "id":"12",
            "firstName": "Max",
            "lastName": "Ma",
            "email": 'max@maa.com',
            "password": 'password',
            'bio': 'I like Kimi, we are best friends',
            "avatar": "https://empirebnb.s3.us-east-2.amazonaws.com/UserSeeding/Max.png"
        },
        
    ]
    for user in users:
        new_user = User(
            id=user['id'],
            firstName=user['firstName'],
            lastName=user['lastName'],
            email=user['email'],
            password=user['password'],
            bio=user['bio'],
            avatar=user['avatar']
        )

        db.session.add(new_user)
        db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
