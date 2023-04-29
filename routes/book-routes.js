const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

router.route('/')
    .post(bookController.book_create_post)

router.route('/:_id')
    .get(bookController.book)
    .put(bookController.book_update_put)
    .delete(bookController.book_delete)

module.exports = router;
