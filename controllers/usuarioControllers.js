const usuarioController = {
    cadastro: (req, res) => {
        res.render('cadastro')
    },
    login: (req, res) => {
        res.render('login')
    },
<<<<<<< HEAD
    cardapio: (req, res) => {
        res.render('cardapio')
=======
    minhaConta: (req, res) => {
        res.render('minhaConta')
>>>>>>> 28f5ae0e0cb452903ef0b97caf2c54408a5ec5c7
    }
}

module.exports = usuarioController