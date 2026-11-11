These instructions are for setting up this project from scratch. If you've cloned this repo, just run npm install and npm start.

## Initial Setup

**Repository setup**

- create new repo on github and select 'node' option for gitignore'
- clone repo to local machine

**Monorep**

Create separate frontend and backend folders.

## Database setup

In root, assuming psql is installed, go into psql shell, and then run:

`CREATE DATABASE database_name OWNER dev_user`

This assumes dev_user has been created.

## Express App Setup

In the backend folder:

**Initialize Node project**

`npm init -y`

Creates a package.json file with the default settings, without asking setup questions.

**Dependencies to install**

`npm install express dotenv`

- express - web framwork to build the server
- dotenv - load environment variables from .env file

**Create app.js file**

This is your main Express server file

**Add start up script to package.json**

Add `"start": "node --watch app.js"` to scripts section in package.json. Run npm start from the project directory (or a subdirectory where npm can find the project’s package.json).

Run your app with `npm start`

## Prisma setup

In the backend folder:

Following the Prisma ORM lesson from the Odin Projet for detailed instructions on setting up Prisma: https://www.theodinproject.com/lessons/nodejs-prisma-orm

Prisma usually runs with typescript by default but the Odin Project includes instructions for setting up Prisma so that it works with javascript.

- pg - Node.js PostgreSQL client library for connecting to PostgreSQL databases and running queries from app
- prisma - ORM for database queries

## React

In the frontend folder

[To do - Set out React install details]
