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
        const foundBook = data.find(book => book._id === String(_id));
        res.render('pages/update', {
            newBook: foundBook
        });
    }
}
