const path = require("path");
const fs = require("fs");
const sqlite = require("sqlite3");

const dbFile = path.resolve(__dirname, "../data/db.sqlite");

const args = process.argv.slice(2);

if (fs.existsSync(dbFile)) {
  if (!args.includes("--force")) {
    console.log(
      "Db file already exists, delete it first or use the -- --force flag!"
    );
    process.exit(1);
  } else {
    console.log("DB already exists, Deleting it...");
    fs.rmSync(dbFile);
  }
}

const db = new sqlite.Database(dbFile);

db.serialize(() => {
  console.log("Creating tables...");
  db.run("PRAGMA foreign_keys = ON");


   // create burger table
   db.run(
    "CREATE TABLE burger (id INTEGER PRIMARY KEY, nom TEXT, prix INTEGER, description TEXT, photoURL TEXT)"
  );

  // create boisson table
  db.run(
    "CREATE TABLE boisson (id INTEGER PRIMARY KEY, nom TEXT, prix INTEGER, taille TEXT, photoURL TEXT)"
  );

  // create accompagnement table
  db.run(
    "CREATE TABLE accompagnement (id INTEGER PRIMARY KEY, nom TEXT, prix INTEGER, taille TEXT, sauce TEXT, photoURL TEXT)"
  );

  // create menu table
  db.run(
    "CREATE TABLE menu (id INTEGER PRIMARY KEY, nom TEXT, prix INTEGER, photoURL TEXT, burgerId INTEGER, FOREIGN KEY(burgerId) REFERENCES burger(id) ON DELETE CASCADE), boissonId INTEGER, FOREIGN KEY(boissonId) REFERENCES boisson(id) ON DELETE CASCADE), accompagnementId INTEGER, FOREIGN KEY(accompagnementId) REFERENCES accompagnement(id) ON DELETE CASCADE)"
  );

  // if (args.includes("--seed")) {
  //   console.log("Seeding data into database...");

    db.run(
      'INSERT INTO burger (id, nom, prix, description) VALUES (1, "Big Mac", 5, "Description")'
    );
    
    db.run(
      'INSERT INTO boisson (id, nom, prix, taille) VALUES (1, "Coca-Cola", 2, "Grande")'
    );

    db.run(
      'INSERT INTO accompagnement (id, nom, prix, taille, sauce) VALUES (1, "Grande frite", 2, "Grande", "Ketchup")'
    );

    db.run(
      'INSERT INTO menu (id, nom, prix, burgerId, boissonId, accompagnementId) VALUES (1, "Menu Best Of", 9, 1, 1, 1)'
    );

  // }
});
