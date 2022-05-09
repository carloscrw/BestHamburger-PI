const { check, body, validationResult } = require('express-validator');

let validaCadastro = [
    check('nome').notEmpty().withMessage('Deve preencher o Nome').isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres'),
    check('sobrenome').notEmpty().withMessage('Deve preencher o Sobrenome').isLength({ min: 3 }).withMessage('O sobrenome deve ter pelo menos 3 caracteres'),
    check('cpf').notEmpty().withMessage('Preencha o CPF').isLength({ min: 11, max: 11 }).withMessage('Insira seu CPF corretamente'),
    check('senha').notEmpty().withMessage('Preencha a Senha').isLength({ min: 6, max: 12 }).withMessage('Senha deve conter no min 6, max 12 caracteres'),
    check("celular").notEmpty().withMessage("Preencha o celular corretamente").isLength({ min: 11, max: 11 }).withMessage("Preencha o celular corretamente"),
    check("email").isEmail().withMessage("Precisa ser um e-mail válido"),
    body("email").custom(async emailBody => {
        const procuraEmail = await Usuario.findOne({
            where: {
                email: emailBody,
            },
        })
        if (!emailBody) {
            return Promise.reject("E-mail é obrigatório");
        }
        if (procuraEmail) {
            console.log(procuraEmail.email)
            return Promise.reject("E-mail já cadastrado");
        }
        if (!procuraEmail) {
            return emailBody;
        }
    }),

]



module.exports = { validaCadastro }