# Project3DTSBackEnd

# DangerZone

Welcome to DangerZone, a full-stack web application created by three budding developers that combines our love of animals with our desire to collaborate and learn React. DangerZone educates users about endangered species and allows logged-in users to add their favorite endangered animal to their own profile page. Members also have access to news articles specifically about endangered animals and how you can help keep our beloved animals alive.

- Full-Stack
- Mongoose, Express, React, Node.js (MERN) for Backend
- React for Frontend

## Technologies Used

- [node.js] - event-driven I/O for the backend
- [Express] - fast node.js network app framework
- [Mongoose](https://mongoosejs.com/)- To query mongodb
- [Mongodb](https://www.mongodb.com/)- For local hosting
- [CORS](https://enable-cors.org/) - Cross Origin Resoursces Sharing
- Visual Studio Code Editor - awesome text editor
- Atom - Another awesome text editor

## Prerequisites

DangerZone requires [Node.js](https://nodejs.org/) v8+ to run.
Node dependencies included with package:

    * "axios": "^0.18.0" - Used to make HTTP requests from node.js and connect remote server with front-end framework
    * "body-parser": "^1.18.3" - Node.js middleware to parse body
    * "cors": "^2.8.4" - Node.js middleware to connect Express
    * "express": "^4.16.3" - Minimal framework for Node.js
    * "jwt-simple": "^0.5.1" -Token needed for authentication
    * "mongo": "^0.1.0",
    * "mongoose": "^5.2.9" - Interact with Mongodb
    * "passport": "^0.4.0" - Needed for authentication
    * "passport-jwt": "^4.0.0" - Needed for authentication using JWT

## Approach Taken

For our app:

1. User can view all animals on the Homepage
2. User can navigate to the News page to see all news articles
3. User can Sign-Up to create an account
4. User can Log-In to access the account
5. Once logged in, User can update their User page by choosing an animal to add to his/her individual User Page

### Multi-server approach

With the given goals, we decided that our App is big enough to require a multi-server approach, yet small enough to contain our routes in a single file. Our decision to follow a multi-server approach and separate the back-end was driven by our desire to use React as our front-end framework. Although possible, hosting the front and back together seemed inefficient.

### Routes

We decided to separate our routes into its own index.js to separate our concerns and keep our server page organized. However, since this educational project placed more emphasis on learning how React interacts with a server, we felt it unnecessary to further separate our routes and hosted all routes for the App in one folder.

### Models

We have three models with DangerZone:

- Anmials model: Stores details about each animal, such as animal name, species name, image, habitat, endangerment level, and etc in our database
- News model: Stores our news articles about endangered animals with important information such as title, author, image, post, and etc.
- User model: Holds important User information needed to create an account and log in such as email and password. There is a reference to the Animal model since each User can update his/her individual User page to add an animal.

### Git Workflow

We chose the Feature Branch Workflow. All individuals had access to the master branch, but we created our own DEV branch to work on and test routes. We would then merge our changes to DEV and if DEV works, then will merge to master.

## Difficulties and Unsolved Problems

Our biggest challenge was connecting the backend routes with the frontend code to render properly. We finished our backend routes and tested with Postman successfully; however, retrieving information from the database to render on the frontend was difficult. This was especially true for User Authentication. We wanted to apply what we learned with JSON Web Token to this project and opted for JWT authentication but learned that we needed to flesh out full CRUD with a minimally viable product before tackling authentication.

It was also a challenge storing the images as a value in a json object to render but we eventually resolved this issue by using Creative Commons images that were open-source.

## Getting Started

DangerZone requires [Node.js](https://nodejs.org/) v8+ to run.
Fork and clone the Github repo to get a copy of this project to your local machine.
After you fork and clone the repo, open your favorite terminal and install dependencies and devDependencies and start the server by:
\*\* DangerZone uses MongoDB as our local host server.

```sh
$ cd Project3DTSBackEnd
$ npm install
$ code .
```

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [Node.js](https://nodejs.org/en/) - Dependency Management
- [MongoDB](https://www.mongodb.com/download-center#atlas) - Used to host local and remote DB.
- [React](https://reactjs.org/) - For the Frontend

## Deployed to

Heroku using MLab.

## Authors

- Tasha Mitchell
- David Zafirovic
- Stephanie Choi

## Acknowledgments

- [World Wild Life](https://www.worldwildlife.org/) : For information about the endangered species
