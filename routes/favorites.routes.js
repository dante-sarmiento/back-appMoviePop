var express = require("express")
var api = express.Router()
var favoritesController= require("../controllers/favorites.controllers")
const authentication = require("../middlewares/authentication")
const isAdmin = require("../middlewares/isAdmin")

api.post("/favorites", favoritesController.createFavorite);
api.get("/favorites", favoritesController.getFavorites);
api.delete("/favorites/:id", favoritesController.deleteFavorite)

module.exports = api;