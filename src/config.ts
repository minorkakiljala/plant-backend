require('dotenv').config();

// This utility function is used to help use debug wether
// Required environment variables are missing.
const isRequired = (env: string, label?: string) => {
  if (!env)
    throw Error(
      `Environment variable is required ${label ? ': ' + label : '.'}`
    );
  return env;
};

export const pgUser: string = isRequired(process.env.PGUSER, 'Postgres-user');
export const pgDB: string = isRequired(process.env.PGDB, 'Postgres-DB');
export const pgPW: string = isRequired(
  process.env.PGPASSWORD,
  'Postgres-password'
);
export const pgHost: string = isRequired(process.env.PGHOST, 'Postgres-host');

// The as here is a typescript cast that we use to read the port as a number
export const pgPort: number = (process.env.PGPORT || 5432) as number; // Alternative is default port for pg.
