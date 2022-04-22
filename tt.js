const { sequelize, Usuario } = require('./models/index')
const { Op } = require('sequelize')

const result = async() => {
    //-----------Creat
    const usuario = await Usuario.create({
        nome: "Carlos",
        sobrenome: "Henrique",
        cpf: "022.709.231-70",
        telefone: "61998492380",
        email: "carlos.c.r.w@gmail.com",
        genero: "M",
        data_de_nascimento: '07-04-1993'


    })



    sequelize.close();
}

result()