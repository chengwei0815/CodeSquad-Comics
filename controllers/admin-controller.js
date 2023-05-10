const Comic = require('../models/comic-model');

module.exports = {
    admin: (req, res) => {
        Comic.find({}, (error, allComics) => {
            if (error) {
                return error;
            } else {
                res.render('pages/admin-console', {
                    booksArray: allComics,
                });
            }
        })
    },
    create: (req, res) => {
        res.render('pages/create-book');
    },

    update: (req, res) => {
        const { _id } = req.params;
        Comic.findOne({ _id: _id }, (error, foundComic) => {
            if (error) {
                return error;
            } else {
                res.render('pages/update', {
                    newBook: foundComic,
                });
            }
        });
    }
}
