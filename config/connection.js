var mysql = require("mysql");

var JAWSDB_URL = "mysql://m3q63vzcieh1x5qd:dhq9unihhivax8hk@axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/srob74ryon13jdna"

var connection = mysql.createConnection(JAWSDB_URL);

// console.log(process.env.JAWSDB_URL);

// if (process.env.JAWSDB_URL) {
//     console.log("establish connection")
//     connection = mysql.createConnection(process.env.JAWSDB_URL);

// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: "900922",
//         database: "burgers_db"
//     })
// }

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }

    console.log("Connected as ID: " + connection.threadId);
})

module.exports = connection;
