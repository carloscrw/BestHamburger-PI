const usuarioController = {
    cadastro: (req, res) => {
        res.render('cadastro')
    },
    login: (req, res) => {
        res.render('login')
    },
    minhaConta: (req, res) => {
        res.render('minhaConta')

    }
}

module.exports = usuarioController