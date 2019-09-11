# Peeps

## Introduction
Welcome to Peeps, a React JS and Express JS full stack single page application! Use this app to store and search your personal and professional contacts.

+ Client site: forthcoming
+ Server site: https://peeps-server.herokuapp.com/
+ Github repo: https://github.com/rogu2/peeps-api

## Getting Started
Simply go to https://peeps-server.herokuapp.com/, sign up, sign in, and start adding your contacts in the fields provided.

## Technologies used
Client Side
+ React JS
+ HTML
+ CSS + SASS
+ Javascript
+ JSX 
+ Axios (AJAX)

Server Side
+ Express JS
+ Node JS
+ Mongoose
+ MongoDB
+ Body-Parser
+ bcrypt
+ JSON Web Token

## Getting involved
Interested in playing with the code or contributing? Read on.

## Prerequisites
+ This front-end is optimized for the Google Chrome browser, but may work elsewhere.
+ This app was developed with Visual Studio, however, any currently supported text editor will work just fine.

## Installing Client
+ Fork and clone the respository locally
+ Navigate to the respository locally and run npm install
+ You will also need to set up the Peeps Server. See further installation instructions on its repo: https://github.com/rogu2/peeps-api

#### Front-end Deployment
+ Merge down to your master branch
+ Push to your remote
+ Then run npm run start

## User Stories
As a user I would like to...
+ Create an account and login.
+ Add contacts name, email, phone number and birthday to my contact list.
+ Ssearch for contacts within my list.
+ Delete contacts.
+ Modify contact information.
+ Logout

## Server Side

The Peeps API is a Express JS server designed to support the Peeps React JS client. Use this app to store and search your personal and professional contacts.


#### Installing
+ Fork and clone the respository locally
+ Navigate to the respository locally and run npm install
+ To test locally, run grunt serve
+ You will also need to set up the Photo Jar Server. See further installation instructions on its repo: https://github.com/rogu2/peeps-api

#### Back-end Deployment
+ Merge down to your master branch
+ Push to your remote
+ Then run nodemon server.js

## API Routes
| Verb   | URI Pattern              | Controller#Action     |
|--------|--------------------------|-----------------------|
| POST   | `/api/auth`              | `auth#create`         |
| GET    | `/api/auth`              | `auth#signin`         |
| GET    | `/api/users`             | `users#create`        |
| GET    | `/api/contacts`          | `contacts#show`       |
| POST   | `/api/contacts`          | `contacts#create`     |
| DELETE | `/api/contacts/:id`      | `contacts#destroy`    |
| PATCH  | `/api/contacts/:id`      | `contacts#update`     |

## Roadmap
When time permits, future versions may also include...
+ Integrate with AWS S3 Bucket to upload contact photos.
+ Integrate with Google Maps API to add contact location.
+ Allow for contact messaging through app.

## License
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact rguempel@gmail.com.
