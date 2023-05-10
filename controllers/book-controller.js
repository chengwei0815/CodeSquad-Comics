const Comic = require('../models/comic-model');

module.exports = {
    books: (req, res) => {
        const { _id } = req.params;
        Comic.findOne({ _id: _id }, (error, foundComic) => {
            if (error) {
                return error;
            } else {
                res.render('pages/bookDetail', {
                    newBook: foundComic,
                });
            }
        })
    },
    book_create_post: (req, res) => {
        const { title, author, publisher, genre, pages, rating, synopsis, image } = req.body;
        const newComic = new Comic({
            title: title,
            author: author,
            publisher: publisher,
            genre: genre,
            pages: pages,
            rating: rating,
            synopsis: synopsis,
            image: image,
        });
        newComic.save();
        res.redirect('/admin-console');
    },
    book_update_put: (req, res) => {
        const { _id } = req.params;
        const { title, author, publisher, genre, pages, rating, synopsis, image } = req.body;
        Comic.findByIdAndUpdate(_id, {$set: {
            title: title,
            author: author,
            publisher: publisher,
            genre: genre,
            pages: pages,
            rating: rating,
            synopsis: synopsis,
            image: image,
        }}, { new: true }, error => {
            if (error) {
                return error;
            } else {
                res.redirect('/admin-console')
            }
        })
    },
    book_delete: (req, res) => {
        const { _id } = req.params;
        Comic.deleteOne({ _id: _id }, error => {
            if (error) {
                return error;
            } else {
                res.redirect('/admin-console');
            }
        })
    },
}
