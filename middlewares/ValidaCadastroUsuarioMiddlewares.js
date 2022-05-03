const { check } = require('express-validator');

let validaCadastro = [
    check('nome').notEmpty().withMessage('Deve preencher o Nome').isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres')
]