const routes= require('express').Router();

const UserController= require('./controllers/UserController');
const AuthController= require('./controllers/AuthController');
const ProfileController= require('./controllers/ProfileController');
const ContentController= require('./controllers/ContentController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.delete('/users', UserController.delete);

routes.post('/auth', AuthController.create);

routes.get('/profile', ProfileController.index);

routes.get('/content', ContentController.index);
routes.post('/content', ContentController.create);
routes.delete('/content', ContentController.delete);

module.exports= routes;