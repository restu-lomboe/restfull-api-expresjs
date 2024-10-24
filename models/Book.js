const connection = require("../app/database/mysql/db");

class BookModel {
  constructor(data) {
    this.data = data;
    this.table = "books";
  }

  async insertBook(data) {
    const ctx = "BookModel.insertBook";
    const { title, description } = data;

    try {
      const conn = await connection.createConnectionPool();
      const sql = `INSERT INTO ${this.table} (title, description) VALUES ('${title}', '${description}')`;
      await conn.query(sql);

      return;
    } catch (error) {
      console.log("error: ", ctx);
      throw new Error("database not connected", error);
    }
  }

  async getBooks() {
    const ctx = "BookModel.getBooks";
    try {
      const conn = await connection.createConnectionPool();
      const sql = `SELECT * FROM ${this.table}`;
      const [data] = await conn.query(sql);
      return data;
    } catch (error) {
      console.log("error: ", ctx);
      throw new Error("database not connected", error);
    }
  }

  async updateBookById(id, data) {
    const ctx = "BookModel.updateBookById";
    const { title, description } = data;
    try {
      const conn = await connection.createConnectionPool();
      const sql = `UPDATE ${this.table} SET title = '${title}', description = '${description}' WHERE id = ${id}`;
      await conn.query(sql);
      return;
    } catch (error) {
      console.log("error: ", ctx);
      throw new Error("database not connected", error);
    }
  }

  async updateTitleBookById(data) {
    const ctx = "BookModel.updateTitleBookById";
    const { id, title } = data;
    try {
      const conn = await connection.createConnectionPool();
      const sql = `UPDATE ${this.table} SET title = '${title}' WHERE id = ${id}`;
      await conn.query(sql);
      return;
    } catch (error) {
      console.log("error: ", ctx);
      throw new Error("database not connected", error);
    }
  }

  async deleteBookById(id) {
    const ctx = "BookModel.deleteBookById";
    try {
      const conn = await connection.createConnectionPool();
      const sql = `DELETE FROM ${this.table} WHERE id = ${id}`;
      await conn.query(sql);
      return;
    } catch (error) {
      console.log("error: ", ctx);
      throw new Error("database not connected", error);
    }
  }
}

module.exports = BookModel;
