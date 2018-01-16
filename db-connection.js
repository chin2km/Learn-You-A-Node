const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Press12345",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // const sql = 'CREATE DATABASE mydb';

  // const sql = 'CREATE TABLE friends (name VARCHAR(255), category VARCHAR(255))';
  // const sql = 'CREATE TABLE colleagues (name VARCHAR(255), category VARCHAR(255))';

  // const sql = 'DROP TABLE friends';
  // const sql = "DROP TABLE IF EXISTS customers"

  // const sql = "CREATE TABLE friends (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), category VARCHAR(255))";

  // const sql = "ALTER TABLE friends ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  // const sql = "ALTER TABLE friends MODIFY COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  
  // const sql = "INSERT INTO friends (name, category) VALUES ('Aniket', 'Close')";
  // const sql = "INSERT INTO colleagues (name, category) VALUES ?";
  const values = [
    ['Aniket', 'Close'],
    ['Sibi', 'Close'],
    ['Nikhil', 'Close']
  ];
  // const sql = "SELECT name, category FROM friends";
  const sql = "SELECT friends.name AS NAME, friends.category AS TYPE FROM friends";
  // const sql = "SELECT (name) FROM friends WHERE category LIKE '%lo%'";
  // const sql = 'SELECT * FROM friends WHERE category = ' + mysql.escape('Aaroo');
  // const sql = 'SELECT * FROM friends WHERE name="Aniket" OR name="Sibi"';
  // const sql = 'SELECT * FROM friends ORDER BY id DESC';
  // const sql = 'SELECT * FROM friends ORDER BY id DESC LIMIT 1';
  // const sql = 'SELECT * FROM friends ORDER BY id DESC LIMIT 1 OFFSET 1';


  // const sql = "DELETE FROM friends";

  // const sql = "UPDATE friends SET name='Aniket Deshpande' WHERE id='12'";
  
  // const sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  // const sql = `SELECT users.name AS user,
  //             products.name AS favorite
  //             FROM users
  //             LEFT JOIN products ON users.favorite_product = products.id`;
  // const sql = `SELECT users.name AS user,
  //             products.name AS favorite
  //             FROM users
  //             RIGHT JOIN products ON users.favorite_product = products.id`;

  con.query(sql, [values], function (err, result, fields) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});
