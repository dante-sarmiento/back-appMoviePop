var Coments = require("../schemas/coments.schema")

async function createComents(req, res){
    try{
        if(!req.body.coment){
            return res.status(400).send('no hay comentario');
        }
        let newComent = new Coments(req.body);
        await newComent.save()
        res.send({ Comentario: newComent })
    }
    catch(error){
        res.status(400).send('error')
    }
}

async function getComents(req,res){
    const comentsDB = await Coments.find()
    res.send({ comentarios: comentsDB })
}

async function deleteComents(req,res){
    try{

    }
    catch(error){

    }
}

module.exports = {
    createComents,
    getComents,
    deleteComents
}