const db = require("../db");

async function findAll() {
  const query = "SELECT * FROM burgers";
  return db.all(query);
}

async function find(id) {
  return db.get("SELECT * FROM burgers WHERE (id = ?)", [id]);
}

async function findByBurgerId(burgerId) {
  return db.all(
    "SELECT * FROM burgers WHERE (id = ?)",
    [burgerId]
  );
}

module.exports = {
    findAll,
    find,
    findByBurgerId
};