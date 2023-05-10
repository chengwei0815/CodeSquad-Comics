const Comic = require('../models/comic-model');

module.exports = {
    index: (req, res) => {
        Comic.find({}, (error, allComics) => {
            if (error) {
                return error;
            } else {
                res.render('pages/index', {
                    booksArray: allComics,
                });
            }
        })
    },
    about: (req, res) => {
        res.render('pages/about');
    },
    login: (req, res) => {
        res.render('pages/login');
    }
}
