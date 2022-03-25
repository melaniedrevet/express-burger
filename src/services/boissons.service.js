const db = require("../db");

async function findAll() {
  const query = "SELECT * FROM boissons";
  return db.all(query);
}

async function find(id) {
  return db.get("SELECT * FROM boissons WHERE (id = ?)", [id]);
}

async function findByBoissonId(boissonId) {
  return db.all(
    "SELECT * FROM boissons WHERE (id = ?)",
    [boissonId]
  );
}

module.exports = {
  findAll,
  find,
  findByBoissonId,
};