const linkRoutes = require('express').Router();
const linkController = require('../controllers/linkController');

linkRoutes.get('/link', linkController.getLinks)
		  .post('/link', linkController.createLink)
          .delete('/link/:linkId', linkController.deleteLink);

module.exports = linkRoutes;
