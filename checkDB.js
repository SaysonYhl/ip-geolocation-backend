const db = require("./models/db");

db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
    if (err) {
        console.error("Error reading tables:", err.message);
    } else {
        console.log("Tables in database:", tables.map(t => t.name));
    }
});
