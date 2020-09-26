var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "api_rest"
});

conn.connect(function(erro) {
    if (!erro) {
        conn.query("SELECT * FROM tbl_produtos", function(err, result, fields) {
            if (!err) {
                console.log(result);
            } else {
                console.log(err);
            }
        });
    }
});