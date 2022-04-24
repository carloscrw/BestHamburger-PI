const Pedido = (sequelize, DataTypes) => {
const pedido = sequelize.define(
        'Pedido', {
            status: {
                type: DataTypes.STRING,
                allownull: false,
            },
            preco_total: {
                type: DataTypes.STRING,
                allownull: false,
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            frete: {
                type: DataTypes.DECIMAL,
                allownull: false,
            },
            cartao_credito: DataTypes.STRING,
            pix: DataTypes.STRING,
            dinheiro: DataTypes.STRING,
            usuario_id: {
                type: DataTypes.INTEGER
            },
            produto_id: {
                type: DataTypes.INTEGER
            }
        }, {
            tableName: "pedido",
            timestamps: false
        }
    )
    // Pedido.associate = (models => {
    //     Pedido.hasmany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
})

return pedido
}

module.exports = Pedido