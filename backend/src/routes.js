const routes= require('express').Router();

const UserController= require('./controllers/UserController');
const AuthController= require('./controllers/AuthController');
const ProfileController= require('./controllers/ProfileController');
const ContentController= require('./controllers/ContentController');
const CommentController= require('./controllers/CommentController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.delete('/users', UserController.delete);

routes.post('/auth', AuthController.create);

routes.get('/profile', ProfileController.index);

routes.get('/content', ContentController.index);
routes.post('/content', ContentController.create);
routes.delete('/content', ContentController.delete);

routes.get('/comment', CommentController.index);
routes.post('/comment', CommentController.create);
routes.delete('/comment', CommentController.delete);

module.exports= routes;