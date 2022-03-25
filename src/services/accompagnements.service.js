const db = require("../db");

async function findAll() {
  const query = "SELECT * FROM accompagnements";
  return db.all(query);
}

async function find(id) {
  return db.get("SELECT * FROM accompagnements WHERE (id = ?)", [id]);
}

async function findByAccompagnementId(accompagnementId) {
  return db.all(
    "SELECT * FROM accompagnements WHERE (id = ?)",
    [accompagnementId]
  );
}


module.exports = {
    findAll,
    find,
    findByAccompagnementId,
};