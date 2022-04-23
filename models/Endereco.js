const Endereco = (sequelize, DataTypes) => {
    const endereco = sequelize.define(
        'Endereco', {
            local: {
                type: DataTypes.STRING,
                allownull: false,
            },
            bairro: {
                type: DataTypes.STRING,
                allownull: false,
            },
            numero: {
                type: DataTypes.STRING,
                allownull: false,
            },
            rua: {
                type: DataTypes.STRING,
                allownull: false,
            },
            referencia: DataTypes.STRING,

            cep: {
                type: DataTypes.STRING,
                allownull: false,
            },

            usuario_id: {
                type: DataTypes.INTEGER


            }
        }, {
            tableName: "endereco",
            timestamps: false
        })
    Endereco.associate = (models => {
        Endereco.belongsTo(models.Usuario, { as: "endereco_usuario", foreignKey: 'usuario_id' })
    })
    return endereco
}

module.exports = Endereco