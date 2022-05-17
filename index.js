var app = require('./app');
const port = process.env.PORT || 3100;
require('dotenv').config();
const PASSWORD = process.env.PASSWORD_DB
var URL = `mongodb+srv://DanteDev:${PASSWORD}@clustermoviepop.g2hyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
var mongoose = require('mongoose');

async function connect() {
    try {
    await mongoose.connect(URL);
    console.log('\x1b[36m connected to mongoDB \x1b[37m');
    app.listen(port, () => {
        console.log(`\x1b[36m Server started on port: ${port} \x1b[37m`);
        });
    }
    catch(error) {
        console.log('\x1b[31m Error al conectar con MongoDB \x1b[37m');
    } 
}
connect();