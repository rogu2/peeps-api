# Peeps API

## Introduction

Welcome to Peeps API, a Express JS server designed to support the Peeps React JS client. Use this app to store and search your personal and professional contacts.

This project is born out of the Software Engineering Immersive course at General Assembly Boston (formerly the WDI, Web Development Immersive) and is the client side of our first full-stack team project.

+ Client site: forthcoming
+ Client repo: https://github.com/rogu2/peeps-client
+ Server site: https://peeps-server.herokuapp.com/
+ Server repo: https://github.com/rogu2/peeps-api

## Getting Started
Simply go to https://rogu2.github.io/peeps-client/, sign up, sign in, and start adding your contacts in the fields provided.

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

## Acknowledgments
Special thanks to Brad Traversey for his exceptional React course.