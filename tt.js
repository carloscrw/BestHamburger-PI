const { sequelize, Usuario, Endereco } = require('./models/index')
const { Op } = require('sequelize')

const result = async() => {

    const usuario = await Usuario.create({
            nome: "Carlos",
            sobrenome: "Henrique",
            cpf: "022.709.231-70",
            telefone: "61998492380",
            email: "carlos.c.r.w@gmail.com",
            genero: "M",
            data_de_nascimento: '07-04-1993'


        })
        // // const enderco = await Endereco.create({
        // //     local: "Casa",
        // //     bairro: "Aguaçai",
        // //     numero: "62",
        // //     rua: "Costa Rica",
        // //     referencia: "km 49",
        // //     cep: "06726260",




    // })



    sequelize.close();
}

result()