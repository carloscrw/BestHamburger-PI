const rotasServicos = {
    cardapioacompanhamentos: (req, res) => {
        res.render("cardapioacompanhamentos")
    },

    cardapioahamburgueres: (req, res) => {
        res.render("cardapiohamburgueres")
    },

    cardapiobebidas: (req, res) => {
        res.render("cardapiobebidas")
    },
    pagamento: (req, res) => {
        res.render("pagamentoSite")
    },
    pagamentoAprovado: (req, res) => {
        res.render("pagamentoAprovado")
    }
}

module.exports = rotasServicos