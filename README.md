# Botanists Assistant Backend

This is a simple backend implemented using express.js, PostgreSQL and docker.

This project was built to provide a high overview of some of the common tools used in backend web-development.

Use with companion frontend [built with react](https://github.com/juliusrajala/botanists-assistant-frontend)

The following technologies are used in this backend among some others:

- Typescript
- Node
- Express
- PostgreSql
- Promises

## On TypeScript

I made a conscious decision to build this system using typescript, because I feel the build-time type safety provided by typescript is very beneficial in many cases and makes writing code a lot faster. TypeScript provides an opt-in type-system, the config of which is provided here in tsconfig.json file.

## Requirements

You should have the following tools installed to run this project:

```bash
1. docker # For running a local database instance https://docs.docker.com/get-started/
2. node   # For running the node server
3. git    # For version control
```

Get started by cloning this repository from github.com.

### Recommended tools

I recommend installing npm using `nvm` (node version manager). It is a tool that allows for you to easily manage different node installations between different projects that might be version dependent.

`pgAdmin` is another useful tool you can use to read and review that data in your `postgres` instance as well as run queries to the db. This makes it relatively simple to query data in your container and create mock-data.

## Development

A `.env` file is required to connect to the PostgreSQL container. Create one and provide the required environment variables. Note that these secrets should never be included in a public git repository.

An example is provided below that should get you started.

```bash
PGDB=plantDB
PGUSER=plantuser
PGPASSWORD=iflplants
PGHOST=localhost
PGPORT=5432
SERVER_PORT=3001
```

Before getting started, make sure you have the required tools installed. After you have installed the required tools on your development machine, install required npm-dependencies by running `npm install` in the root directory for the project.

### Commands explained

This development environment provides a few useful commands for dealing with the development setup. You can find and alter these scripts in the `scripts` block of your `package.json` file.

```bash
# Dev: this is your go to development command that starts the
# docker-container and runs a nodemon watcher process that applies your
# changes as you write code.
$ npm run dev

# start nodemon: You might not want to restart your docker-container every time, this simply starts the nodemon process that watches the server for changes.
$ npm run start-nodemon

# start-db: This command is run automatically as part of the dev command
# The -d flag stands for detach. If you wish to keep a connection to your
# development database, you may run this manually without the flag as docker-compose up
$ npm run start-db

# clean-db: Removes the data stored by your database-instance.
$ npm run clean-db

# build: Builds the typescript backend into javascript and provides the
# transpiled-to-js version in a ./build repository
$ npm run build

```

## Running this backend in production

Coming at a later date.

## Improvements

- Add a users table, attach plants to specific users.
- Add user authentication.
- Make endpoints for watering plants.
- Make endpoints for removing plants.
- Track how many times different users have watered the plants.
- Dockerize the node process.
- Allow users to sign up with google.
- Build an endpoint for hosting the frontend.

- Use this base to build something completely different.

## License

MIT License

Copyright (c) 2020 Julius Rajala

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
