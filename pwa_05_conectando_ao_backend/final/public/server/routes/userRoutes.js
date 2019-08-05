const userRoutes = require('express').Router();
const userController = require('../controllers/userController');

userRoutes.post('/subscribeToNotification', userController.subscribeToNotification);		  

module.exports = userRoutes;
