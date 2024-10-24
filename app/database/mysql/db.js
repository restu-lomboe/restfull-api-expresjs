const mysql = require("mysql2/promise");
const dbConfig = require("../../../config/database.js");

// MySQL database configuration
module.exports = {
  createConnectionPool: async () => {
    const db = dbConfig.development;
    return await mysql.createPool(db);
  },
};
