# StackOverflow-clone

You can find the deployed project at https://stackoverflowconee.herokuapp.com

### Key Features

- Create your User account with email and password
- User:
  - Ask questions
  - Answer Questions
  - View Questions
  - Search
  - Upvote a question
  - Downvote a question

- No need to create account to view questions and answers

## Tech Stack

Node.js, Express framework, MongoDB with Mongoose ODM, JWT, Bcrypt,

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm start** to start the local server
- **npm run start:dev** to start the local server with nodemon
- **npm test** to start server using testing environment

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

```
DATABASE_URI=""
JWT_Secret=""
TEST_DB=""

```

## Endpoints
Documentation for Endpoints can be found [here](https://documenter.getpostman.com/view/3210014/TzJycFiY)

