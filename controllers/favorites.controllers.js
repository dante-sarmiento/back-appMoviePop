var Favorites = require("../schemas/favorites.schema")

async function createFavorite(req, res){
    try{
        let newFavorite= new Favorites(req.body);
        await newFavorite.save()
        res.send({ Favorites: newFavorite })
    }
    catch(error){
        res.status(400).send('error')
    }
}

async function getFavorites(req,res){
    const favoritesDB = await Favorites.find()
    res.send({ favorites: favoritesDB })
}

async function deleteFavorite(req, res){
    
    const favorite_deleted = req.params.id; /*query*/

    const favoriteDelete = await Favorites.findByIdAndDelete(favorite_deleted);
    console.log(favoriteDelete);
    
    res.send({favoriteDeleted: favoriteDelete });
}



module.exports = {
    createFavorite,
    getFavorites,
    deleteFavorite
}