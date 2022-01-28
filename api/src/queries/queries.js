
require("dotenv").config();
const sql = require('mysql2/promise');
const config = require('../config/config');

async function getFunctions() {
    try {        

        const connection = await sql.createConnection(config.sekyoor);
        const [results, ] = await connection.execute('SELECT * FROM nistfunctions');
        
        return results

    } catch (err) {
        console.dir(err);
    } 
}

module.exports = {
    getFunctions: getFunctions
}