var app = require('./app');
var port = 3000
const password = 'devaccount1234';
var URL = `mongodb+srv://DanteDev:${password}@clustermoviepop.g2hyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
var mongoose = require('mongoose')

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

app.get('/', function(req, res) {
    res.send("El servidor esta respondiendo correctamente 2")
});