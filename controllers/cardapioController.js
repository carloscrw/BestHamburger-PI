const res = require("express/lib/response")
const { Produto } = require("../models/index")

const cardapioController = {

    acompanhamentos: async(req, res) => {
        let produtos = await Produto.findAll({ where: { tipo: "Acompanhamento" } });
        res.render("cardapioacompanhamentos", { produtos });
    },

    hamburgueres: async(req, res) => {
        let produtos = await Produto.findAll({ where: { tipo: "Hamburger" } });
        res.render("cardapiohamburgueres", { produtos });
    }

}

module.exports = cardapioController