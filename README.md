# The Plant Backend

This is a simple backend implemented using express.js, PostgreSQL and docker.

This project was built to provide a high overview of some of the common tools used in backend web-development.

The following technologies are used in this backend among some others:

- Typescript
- Node
- Express
- PostgreSql
- JS-Promises

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
