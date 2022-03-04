const rotasServicos = {
    cardapio: (req, res) => {
        res.render('cardapio')
    },
    pagamentoPix: (req, res) => {
        res.render("pagamentoPix")
    }
}

module.exports = rotasServicos