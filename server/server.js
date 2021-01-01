const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mason',
  password: 's8Mi1SfONCNj',
  database: 'test',
});

connection.connect();

app.get('/test', async (req, res) => {
  await connection.query(
    "INPUT INTO projects(img, title, body, anchor) VALUES ('./someshit.jpg', 'testing', 'This is the body of testing', 'https://elementor.mason-roberts.com');",
    (err, results) => {
      console.log(err);
      res.send(results);
    }
  );
});

app.listen(3002, (req, res) => {
  console.log('server running');
});
