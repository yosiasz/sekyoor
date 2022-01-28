const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  sekyoor: { 
    host: process.env.SERVER,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
  }
};
