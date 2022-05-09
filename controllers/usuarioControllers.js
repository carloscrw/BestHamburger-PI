const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const saltRounds = 10
const { Usuario } = require('../models/index')
const bodyParser = require('body-parser')

const usuarioController = {
    index: (req, res) => {
        res.render('index')
    },
    telaCadastro: (req, res) => {
        res.render('cadastro')
    },
    cadastroUsuario: async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('cadastro', { errors: errors.mapped(), old: req.body });

        } else {
            let { nome, sobrenome, cpf, celular, email, genero, data_de_nascimento, senha } = req.body
            let hash = bcrypt.hashSync(senha, saltRounds)
            const usuario = await Usuario.create({

                nome: nome,
                sobrenome: sobrenome,
                cpf: cpf,
                telefone: celular,
                email: email,
                genero: genero,
                data_de_nascimento: data_de_nascimento,
                senha: hash
            })


            res.redirect("login")
        }
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