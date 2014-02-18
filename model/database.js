var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.query('USE eRecrut');


module.exports = { 
    connection : connection
}