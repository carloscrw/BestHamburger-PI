const rotasServicos = {
    cardapioacompanhamentos: (req, res) => {
        res.render("cardapioacompanhamentos")
    },
    pagamentoPix: (req, res) => {
        res.render("pagamentoPix")
    }
}

module.exports = rotasServicos