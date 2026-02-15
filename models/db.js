const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// database file
const dbPath = path.resolve(__dirname, "../database.sqlite");

// open connection with db
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Failed to connect to database", err.message);
    } else {
        console.log("Connected to database.");
    }
});

module.exports = db;