import pgPromise from 'pg-promise';
import { pgUser, pgDB, pgPW, pgHost, pgPort } from '../config';

// This module initialises our pg-promise library that
// we use to make queries to the postgres database.

const pgp = pgPromise();

// These are the options we use to connect to the DB.
const databaseOptions = {
  user: pgUser,
  host: pgHost,
  password: pgPW,
  database: pgDB,
  port: pgPort
};

export const db = pgp(databaseOptions);

export default pgp;
