const { sequelize, Usuario, Endereco, Pedido } = require('./models/index')


const result = async() => {

    const usuario = await Usuario.create({
            nome: "veronica 2",
            sobrenome: "bandeira",
            cpf: "085.739.256-70",
            telefone: "11987876469",
            email: "veronica.bandeira@gmail.com",
            genero: "F",
            data_de_nascimento: '1993-05-14',
            senha: "0123456"


        })
        // const endereco = await Endereco.create({
        //     local: "Casa",
        //     bairro: "Aguaçai",
        //     numero: '61',
        //     rua: "Costa Rica",
        //     referencia: "km 49",
        //     cep: "06726260",
        //     usuario_id: 2

    // })

    // const pedido = await Pedido.create({
    //     status: "pagamento aprovado",
    //     preco_total: "200,00",
    //     data: '07-04-2022',
    //     frete: 14.00,
    //     cartao_credito: "false",
    //     pix: "false",
    //     dinheiro: "true",
    //     usuario_id: 2,
    //     produto_id: 0,

    // })




    sequelize.close();
}

result()

//teste//