const connection = require("./db");

const conn = async () => {
  try {
    const conn = await connection.createConnectionPool();
    console.log("database connected");
    return conn;
  } catch (error) {
    console.log("database not connected", error);
  }
};

module.exports = {
  conn,
};
