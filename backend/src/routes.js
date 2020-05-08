const routes= require('express').Router();

const UserController= require('./controllers/UserController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.delete('/users', UserController.delete);

module.exports= routes;