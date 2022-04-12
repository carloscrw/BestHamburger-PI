const rotasServicos = {
    cardapioacompanhamentos: (req, res) => {
        res.render("cardapioacompanhamentos")
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