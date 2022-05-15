var express = require("express")
var api = express.Router()
var comentsController = require("../controllers/coments.controllers")
const authentication = require("../middlewares/authentication")
const isAdmin = require("../middlewares/isAdmin")

api.post("/coments", comentsController.createComents);
api.get("/coments", comentsController.getComents);

api.delete("/coments/:id", comentsController.deleteComents);


module.exports = api;