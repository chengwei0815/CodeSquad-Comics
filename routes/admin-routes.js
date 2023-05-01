const express = require('express');
const { admin } = require('../controllers/admin-controller');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

router.route('/')
    .get(adminController.admin)
router.route('/create-book')
    .get(adminController.create)
router.route('/update-book/:_id')
    .get(adminController.update)

module.exports = router;
