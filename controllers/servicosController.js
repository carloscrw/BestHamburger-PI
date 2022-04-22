const rotasServicos = {
    cardapioacompanhamentos: (req, res) => {
        res.render("cardapioacompanhamentos")
    },

    cardapioahamburgueres: (req, res) => {
        res.render("cardapiohamburgueres")
    },

    cardapiobebidas: (req, res)=> {
        res.render("cardapiobebidas")
    },
    pagamentoPix: (req, res) => {
        res.render("pagamentoPix")
    },
    pagamentoAprovado: (req, res) => {
        res.render("pagamentoAprovado")
    }
}

module.exports = rotasServicos