const rotasServicos = {
    cardapioacompanhamentos: (req, res) => {
        res.render("cardapioacompanhamentos")
    },

    cardapiobebidas: (req, res)=> {
        res.render("cardapiobebidas")
    },

    cardapiohamburgueres: (req, res) => {
        res.render("cardapiohamburgueres")
    },

    pagamentoPix: (req, res) => {
        res.render("pagamentoPix")
    },
    pagamentoAprovado: (req, res) => {
        res.render("pagamentoAprovado")
    }
}

module.exports = rotasServicos