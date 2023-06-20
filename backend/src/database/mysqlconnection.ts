const mysql = require("mysql2");
  
let db_con  = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: 'root',
    database: 'db'
});
  
db_con.connect((err) => {
    if (err) {
      console.log("Error de conexión", err);
    } else {
      console.log("Conexión correcta");
    }
});
  
module.exports = db_con;