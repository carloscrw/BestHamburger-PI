const Usuario = (sequelize, DataTypes) => {
    const usuario = sequelize.define(
        'Usuario', {
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            cpf: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            telefone: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            genero: DataTypes.STRING,
            data_de_nascimento: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            avata: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        }, {
            tableName: "usuario",
            timestamps: false
        }
    )
    Usuario.associate = (models => {
        Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    })

    return usuario
}



module.exports = Usuario