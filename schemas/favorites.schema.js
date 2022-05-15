var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoritesSchema = new Schema ({
    user: {
        type: Object,
        required: true
    },
    movie: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model("Favorites", favoritesSchema)