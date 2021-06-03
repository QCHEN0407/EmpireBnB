from random import randint
# from faker import Faker
from werkzeug.security import generate_password_hash
from app.models import db, User
# fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        firstName='Demo',
        lastName='User',
        email='demo@aa.io',
        password='password',
        bio='I am the guest user, welcome to EmpireBnB!',
        avatar='https://slackx.s3.amazonaws.com/kimi.png'
        )

    db.session.add(demo)
    db.session.commit()

    users = [
        {
            "firstName": "Ren",
            "lastName": "Dracula",
            "email": 'ren@minion.com',
            "password": 'password',
            "bio": "I'm secretly the smartest person in class, and I'm the unofficial group leader",
            "avatar": "https://slackx.s3.amazonaws.com/renerose.jpg"
        },
        {
            "firstName": "Earl",
            "lastName": "Grubhub",
            "email": 'wheremy@mfood.com',
            "password": 'password',
            "bio": "I'm 75% here, and I'm hungary",
            "avatar": "https://slackx.s3.amazonaws.com/earl.jpg"
        },
        {
            "firstName": "Vivian",
            "lastName": "Cutedog",
            "email": 'cutedog@kimi.com',
            "password": 'password',
            'bio': 'I have a cute dog, and CSS-MASTER!!!!',
            "avatar": "https://slackx.s3.amazonaws.com/vivian.png"

        },
        {
            "firstName": "Nathaniel",
            "lastName": "HotPocket",
            "email": 'hotdogs@7up.com',
            "password": 'password',
            'bio': 'I love white shirts, and building games.',
            "avatar": "https://slackx.s3.amazonaws.com/nathaniel.jpg"
        },
    ]
    for user in users:
        new_user = User(
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
