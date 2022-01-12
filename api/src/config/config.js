const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  sekyoor: { 
    serverurl: process.env.SERVER_URL,
    dbString: process.env.DB_STRING,
  }
};
