const connection = require("../app/database/mysql/db");
const bcrypt = require("bcrypt");

class AuthModel {
  constructor(data) {
    this.data = data;
    this.table = "users";
  }

  async register(data) {
    const ctx = "AuthModel.register";
    const { name, username, password } = data;

    const hashPassword = await bcrypt.hash(password, 10);

    try {
      const conn = await connection.createConnectionPool();
      const sql = `INSERT INTO ${this.table} (name, username, password) VALUES ('${name}', '${username}', '${hashPassword}')`;
      await conn.query(sql);

      return;
    } catch (error) {
      console.log("error: ", ctx);
      throw new Error("database not connected", error);
    }
  }

  async findOne(data) {
    const ctx = "AuthModel.findOne";
    const { username } = data;

    try {
      const conn = await connection.createConnectionPool();
      const sql = `SELECT * FROM ${this.table} WHERE username = '${username}'`;
      const [user] = await conn.query(sql);

      return user[0];
    } catch (error) {
      console.log("error: ", ctx);
      throw new Error("database not connected", error);
    }
  }

  async login(data) {
    const ctx = "AuthModel.login";
    const { username, password } = data;

    const conn = await connection.createConnectionPool();
    const queryGetUser = `SELECT * FROM ${this.table} WHERE username = '${username}' AND password = '${password}'`;

    const hashPassword = await bcrypt.hash(password, 10);

    try {
      const sql = `INSERT INTO ${this.table} (name, username, password) VALUES ('${name}', '${username}', '${hashPassword}')`;
      await conn.query(sql);

      return;
    } catch (error) {
      console.log("error: ", ctx);
      throw new Error("database not connected", error);
    }
  }
}

module.exports = AuthModel;
