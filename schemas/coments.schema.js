var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var comentsSchema = new Schema({
    user:{
        type: Object,
        required: true
    },
    movieID:{
        type: Number,
        required: true
    },    
    coment: {
        type: Object,
        required: true,
        maxlength: 120
    }
});

module.exports = mongoose.model("Coments", comentsSchema)