const db = require("../db");

async function findAll() {
    return db.get("SELECT * FROM menus");
}

// async function find(id) {
//   return db.get("SELECT * FROM posts WHERE (id = ?)", [id]);
// }

// async function create({ title, body, imageURL }) {
//   return db.run(
//     'INSERT INTO posts (title, imageURL, body, ispublished, createdAt) VALUES (?, ?, ?, TRUE, datetime("now"))',
//     [title, imageURL, body]
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
//   find,
//   create,
//   update,
//   remove,
};
