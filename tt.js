const { sequelize, Usuario, Endereco, Pedido } = require('./models/index')
const { Op } = require('sequelize')

const result = async() => {

    // const usuario = await Usuario.create({
    //     //     nome: "Carlos",
    //     //     sobrenome: "Henrique",
    //     //     cpf: "022.709.231-70",
    //     //     telefone: "61998492380",
    //     //     email: "carlos.c.r.w@gmail.com",
    //     //     genero: "M",
    //     //     data_de_nascimento: '07-04-1993',
    //     //     senha: ""


    // })
    // const endereco = await Endereco.create({
    //     local: "Casa",
    //     bairro: "Aguaçai",
    //     numero: '61',
    //     rua: "Costa Rica",
    //     referencia: "km 49",
    //     cep: "06726260",
    //     usuario_id: 2

    // })

    const pedido = await Pedido.create({
        status: "pagamento aprovado",
        preco_total: "200,00",
        data: '07-04-2022',
        frete: 14.00,
        cartao_credito: "false",
        pix: "false",
        dinheiro: "true",
        usuario_id: 2,
        produto_id: 0,

    })




    sequelize.close();
}

result()

//teste//