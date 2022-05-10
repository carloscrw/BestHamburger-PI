const { check, body, validationResult } = require('express-validator');
const { Usuario } = require('../models/index')

let validaCadastro = [
    check('nome').notEmpty().withMessage('Deve preencher o Nome').isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres'),
    check('sobrenome').notEmpty().withMessage('Deve preencher o Sobrenome').isLength({ min: 3 }).withMessage('O sobrenome deve ter pelo menos 3 caracteres'),
    check('cpf').notEmpty().withMessage('Preencha o CPF').isLength({ min: 11, max: 11 }).withMessage('Insira seu CPF corretamente'),
    check("data_de_nascimento").notEmpty().withMessage('Preencha a Data'),
    check("genero").notEmpty().withMessage('-Selecione-'),
    check('senha').notEmpty().withMessage('Preencha a Senha').isLength({ min: 6, max: 12 }).withMessage('Senha deve conter no min 6, max 12 caracteres'),
    check("celular").notEmpty().withMessage("Preencha o celular corretamente").isLength({ min: 11, max: 11 }).withMessage("Preencha o celular corretamente"),
    body("email").notEmpty().withMessage('Preencha o e-mail').isEmail().withMessage("Precisa ser um e-mail válido"),
    body('email').custom(value => {
        return Usuario.findOne({ where: { email: value } }).then(user => {
            if (user) {
                return Promise.reject('E-mail já cadastrado');
            }

        });
    })

]
let validaLogin = []






module.exports = {
    validaCadastro,
    validaLogin,
}