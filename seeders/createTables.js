const db = require("../models/db");

// create users table
db.run(
    `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
    )`,
    (err) => {
        if (err) console.error("Error creating users table", err.message);
        else console.log("Users table created or already exists");
    }
);

// create history table
db.run(
    `CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    ip_address TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
    )`,
    (err) => {
        if (err) console.error("Error creating history table", err.message);
        else console.log("History table created or already exists");
    }
);