const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller')

router.route('/')
    .get(siteController.index)
router.route('/about')
    .get(siteController.about)
router.route('/login')
    .get(siteController.login)

module.exports = router;
