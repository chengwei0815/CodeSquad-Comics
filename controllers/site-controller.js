const Comic = require('../models/comic-model');
const User = require('../models/user-model');
const passport = require('passport');

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
    login_get: (req, res) => {
        res.render('pages/login');
    },
    login_post: (req, res) => {
        const { username, password } = req.body;
        const user = new User({
            username: username,
            password: password
        })
        req.login(user, (error) => {
            if (error) {
                console.log(`The error at login is: ${error}`);
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin-console');
                });
            };
        });
    },
    register_get: (req, res) => {
        res.render('pages/register');
    },
    register_post: (req, res) => {
        const { username, password } = req.body;
        User.register({ username, username }, password, (error, user) => {
            if (error) {
                console.log(`The error at register is: ${error}`);
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin-console');
                });
            }
        });
    },
    google_get: passport.authenticate('google', {
        scope: ['openid', 'profile', 'email']
    }),
    google_redirect_get: [
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/admin-console');
        }
    ],

    logout: (req, res) => {
        req.logout(function (error) {
            if (error) {
                return next(error);
            }
        });
        res.redirect('/');
    },
}
