const data = require('../data/data');

module.exports = {
    admin: (req, res) => {
        res.render('pages/admin-console', {
            booksArray: data
        });
    },
    create: (req, res) => {
        res.render('pages/create-book');
    },
    update: (req, res) => {
        const { _id } = req.params;
        const newBook = data.find(book => book._id === _id);
        res.render('pages/update', {
            inventoryItem: newBook
        });
    }
}
