import { db } from '../core/pgp';
import { Request, NextFunction } from 'express';

const startTransaction = database => callBack =>
  database.tx(txDb => {
    console.log('Reading middleware values:', callBack, txDb);
    return callBack(txDb);
  });

// This middleware attaches our pg-promise-wrapped db to the request object
// for easier access during queries.
export const databaseMiddleware = (
  req: Request,
  _: Response, // We don't do anything with the response here.
  next: NextFunction
) => {
  if (!req.db) {
    req.db = db;
  }

  // We attach the transaction to the request.
  // https://vitaly-t.github.io/pg-promise/Database.html
  req.startTx = startTransaction(req.db);
  next();
};
