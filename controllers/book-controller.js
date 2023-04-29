const data = require('../data/data');
const { v4: uuid } = require('uuid');

module.exports = {
    book: (req, res) => {
        let id = req.params._id;
        const newBook = data.find(book => book._id === String(id));
        res.render('pages/bookDetail', {
            inventoryItem: newBook
        });
    },
    book_create_post: (req, res) => {
        const {_id = uuid(), title, author, publisher, genre, pages, rating, synopsis, image} = req.body;
        data.push({_id, title, author, publisher, genre, pages, rating, synopsis, image});
        res.redirect('/admin-console');
    },

}
