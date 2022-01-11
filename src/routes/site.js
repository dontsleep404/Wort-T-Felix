var express = require('express');
var router = express.Router();

const siteController = require('../app/controllers/SiteController');

// siteController.index

router.get('/search', siteController.search);
router.get('/home', siteController.index);
router.get('/', siteController.login);


module.exports = router;
