const rotasServicos = {
    cardapioacompanhamentos: (req, res) => {
        res.render("cardapioacompanhamentos")
    },
    cardapiohamburguer: (req, res)=> {
        res.render("cardapiohamburguer")
    },
    pagamentoPix: (req, res) => {
        res.render("pagamentoPix")
    },
    pagamentoAprovado: (req, res) => {
        res.render("pagamentoAprovado")
    }
}

module.exports = rotasServicos