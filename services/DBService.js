const mysql = require('mysql2/promise');

class DBService {

    async init() {
        try {
            this.connection = await mysql.createConnection({
                host: 'localhost',
                user: 'calcuser',
                database: 'calculatorDB',
                password: '123456'
            });
        }
        catch (err) {console.error(err)};

    }

    async addEntry (expression) {
        /*this.history.push({
            id: this.totalElementsCounter += 1,
            expression
        })*/
        try {
            await this.connection.execute('INSERT INTO history (expression) VALUES (?)', [expression]);
        }
        catch (err) {console.error(err)}


    }

    async deleteAll() {
        //this.history = [];
        //this.totalElementsCounter = 0;
        await this.connection.execute('DELETE FROM history');
    }

    async deleteEntry (id) {
        //this.history = this.history.filter(elem => elem.id !== id);
        await this.connection.execute('DELETE FROM history WHERE id = (?)', [id]);
    }

     async getAll () {
        let rows;
        try {
            [rows] = await this.connection.execute('SELECT * FROM history');
        }
        catch (err) {console.error("SELECT * error: ", err)}
        return rows;
    }

};

module.exports = DBService;