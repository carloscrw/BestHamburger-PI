let modelServico = require("../model/servico.json");
let modelPets = require("../model/pets.json")

const petsController = {
    listaServicos:(req,res)=>{
    res.send(modelServico);
},
    listaPets:(req,res)=>{
        res.send(modelPets);
    }
}

module.exports = petsController