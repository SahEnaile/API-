const { DataTypes } = require('sequelize');
const database = require('../config/database');

class Postagem {
    constructor() {
        this.model = database.define('Postagem', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: DataTypes.STRING
            },
            conteudo: {
                type: DataTypes.TEXT
            },
            autorId: {
                type: DataTypes.INTEGER
            }
        });
    }
}

module.exports = Postagem;
