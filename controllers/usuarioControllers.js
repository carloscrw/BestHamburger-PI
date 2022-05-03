const bcrypt = require('bcrypt')
const saltRounds = 10
const { Usuario } = require('../models/index')

const usuarioController = {
    index: (req, res) => {
        res.render('index')
    },
    cadastro: (req, res) => {
        res.render('cadastro')
    },
    cadastroUsuario: async(req, res) => {
        let { nome, sobrenome, cpf, nascimento, celular, genero, email, senha } = req.body
        let hash = bcrypt.hashSync(senha, saltRounds)
        const usuario = await Usuario.create({
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            telefone: celular,
            email: email,
            genero: genero,
            data_de_nascimento: nascimento,
            senha: hash
        })
        res.redirect("login")
    },
    login: (req, res) => {
        res.render('login')
    },
    minhaConta: (req, res) => {
        res.render('minhaConta')

    },
    carrinho: (req, res) => {
        res.render('carrinho')
    }
}
module.exports = usuarioController