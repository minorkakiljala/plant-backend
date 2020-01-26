import router from 'express-promise-router';
import { getPlants, createPlant } from '../core/models';
import { createPlantFromRelation } from '../core/orm';

const handleGeneralError = (err, res) => res.sendStatus(400);

const routes = router();

routes.get('/v1/plants', (req, res) => {
  getPlants(req.db)
    .then(results => results.map(createPlantFromRelation))
    .then(results => res.send(results))
    .catch(err => handleGeneralError(err, res));
});

routes.post('/v1/plants/create', (req, res) => {
  createPlant(req.db, req.body)
    .then(result => res.send(result))
    .catch(err => handleGeneralError(err, res));
});

export default routes;
