const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/codesquadComics', {useNewUrlParser: true, useUnifiedTopology: true},
(error) => {
    if (!error) {
        console.log("Successful connection with MonogoDB Server");
    } else {
        console.log("Error with MongoDB's connectivity");
    }
});
