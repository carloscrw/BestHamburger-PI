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

        }, {
            tableName: "pedido",
            timestamps: false
        }
    )
    Pedido.associate = (models => {
        Pedido.belongsToMany(models.Produto, { as: "produto", through: "produto_pedido", foreignKey: 'pedido_id', otherKey: "produto_id", timestamps: false })

        Pedido.belongsTo(models.Usuario, { as: "pedido_usuario", foreignKey: 'usuario_id' })
    })

    return pedido
}

module.exports = Pedido