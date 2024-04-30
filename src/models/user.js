const { DataTypes } = require('sequelize');
const database = require('../config/database');

class User {
    constructor() {
        this.model = database.define('User', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            senha: {
                type: DataTypes.STRING
            }
        });
    }
}

module.exports = User;
