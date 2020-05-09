const routes= require('express').Router();

const UserController= require('./controllers/UserController');
const AuthController= require('./controllers/AuthController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.delete('/users', UserController.delete);

routes.post('/auth', AuthController.create);

module.exports= routes;