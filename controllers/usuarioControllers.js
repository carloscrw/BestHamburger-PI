const usuarioController = {
    cadastro: (req, res) => {
        res.render('cadastro')
    },
    login: (req, res) => {
        res.render('login')
    },
    cardapio: (req, res) => {
        res.render('cardapio')
    }
}

module.exports = usuarioController