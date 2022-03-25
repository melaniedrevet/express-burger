const db = require("../db");

async function findAll() {
  const query = "SELECT * FROM menus";
  return db.all(query);
}

async function find(id) {
  return db.get("SELECT * FROM menus WHERE (id = ?)", [id]);
}

// async function create({ nom, prix, burgerId, boissonId, accompagnementId }) {
//   return db.run(
//     'INSERT INTO menus (nom, prix, burgerId, boissonId, accompagnementId) VALUES (?, ?, ?, ?, ?',
//     [nom, prix, burgerId, boissonId, accompagnementId]
//   );
// }

// async function update(id, { title, body, isPublished }) {
//   return db.run(
//     "UPDATE posts SET title = ?, body = ?, ispublished = ? WHERE (id = ?)",
//     [title, body, isPublished ? true : false, id]
//   );
// }

// async function remove(id) {
//   return db.run("DELETE FROM posts WHERE (id = ?)", [id]);
// }

module.exports = {
  findAll,
  find,
//   create,
//   update,
//   remove,
};
