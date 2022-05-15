let express = require('express');
let app = express();
let user_routes = require("./routes/user.routes")
let coments_routes = require("./routes/coments.routes")
let cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api', [
    user_routes,
    coments_routes
])

module.exports = app