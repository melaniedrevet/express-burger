const path = require("path");
const fs = require("fs");
const sqlite = require("sqlite3");

const dbFile = path.resolve(__dirname, "../data/db.sqlite");

const args = process.argv.slice(2);

if (fs.existsSync(dbFile)) {
  if (!args.includes("--force")) {
    console.log(
      "Db file already exists, delete it first or use the --force flag!"
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
    "CREATE TABLE burgers (id INTEGER PRIMARY KEY, nom TEXT, prix INTEGER, description TEXT, photoURL TEXT)"
  );

  // create boisson table
  db.run(
    "CREATE TABLE boissons (id INTEGER PRIMARY KEY, nom TEXT, prix INTEGER, taille TEXT, photoURL TEXT)"
  );

  // create accompagnement table
  db.run(
    "CREATE TABLE accompagnements (id INTEGER PRIMARY KEY, nom TEXT, prix INTEGER, taille TEXT, sauce TEXT, photoURL TEXT)"
  );

  // create menu table
  db.run(
    "CREATE TABLE menus (id INTEGER PRIMARY KEY, nom TEXT, prix INTEGER, photoURL TEXT, burgerId INTEGER, boissonId INTEGER, accompagnementId INTEGER,FOREIGN KEY(burgerId) REFERENCES burgers(id), FOREIGN KEY(boissonId) REFERENCES boissons(id), FOREIGN KEY(accompagnementId) REFERENCES accompagnements(id))"
  );

  // if (args.includes("--seed")) {
  //   console.log("Seeding data into database...");

    db.run(
      'INSERT INTO burgers (id, nom, prix, description) VALUES (1, "Big Mac", 5, "Description")'
    );
    
    db.run(
      'INSERT INTO boissons (id, nom, prix, taille) VALUES (1, "Coca-Cola", 2, "Grande")'
    );

    db.run(
      'INSERT INTO accompagnements (id, nom, prix, taille, sauce) VALUES (1, "Grande frite", 2, "Grande", "Ketchup")'
    );

    db.run(
      'INSERT INTO menus (id, nom, prix, burgerId, boissonId, accompagnementId) VALUES (1, "Menu Best Of", 9, 1, 1, 1)'
    );
    db.run(
      'INSERT INTO menus (id, nom, prix, burgerId, boissonId, accompagnementId) VALUES (2, "Menu Maxi Best Of", 11, 1, 1, 1)'
    );

  // }
});
