const Sequelize = require('sequelize');

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.db = new Sequelize(
            'bancodomvc', 
            'root',       
            '',          
            {
                host: 'localhost',  
                dialect: 'mysql'     
            }
        );
    }
}

module.exports = new Database(); // Exporta uma instância da classe Database
