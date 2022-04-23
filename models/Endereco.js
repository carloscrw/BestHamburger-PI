const { DataTypes } = require("sequelize/types")

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
            }
        }, {
            tableName: "usuario",
            timestamps: false

        }
    )
    return endereco
}

module.exports = Endereco