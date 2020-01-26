import router from 'express-promise-router';
import { getPlants, createPlant } from '../core/models';

const handleGeneralError = (err, res) => res.sendStatus(400);

const routes = router();

routes.get('/v1/plants', (req, res) => {
  getPlants(req.db)
    .then(result => res.send(result))
    .catch(err => handleGeneralError(err, res));
});

routes.post('/v1/plants/create', (req, res) => {
  createPlant(req.db, req.body)
    .then(result => res.send(result))
    .catch(err => handleGeneralError(err, res));
});

routes.get('/v1/admin', (req, res) => {
  const options = {
    root: './src',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile('/public/admin.html', options, err => {
    if (err) {
      console.error('Error happened', err);
      res.status(200).send('Tapahtui virhe');
    }
  });
});

export default routes;
