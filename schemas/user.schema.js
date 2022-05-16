var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rolesValidos = [
    'ADMIN_ROLE',
    'USER_ROLE'
]

var UserSchema = new Schema({
    fullName: { type: String, required: true, maxlength: 40 },
    email: { type: String, required: true, unique: true, maxlength: 40 },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
    FavoritesMovies: { type: Array, required: true, default: "No hay peliculas favoritas"}
});

module.exports = mongoose.model('User', UserSchema)