const http = require("http");
// Const mysql = require('mysql');
// Use these variables to define our port, Hostname
const hostname = "127.0.0.1";
const port = 3001;
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

// ---------------------------- Start of MySQL Code ----------------------------
// This grants access to the methods of the mysql module
const mysql = require("mysql2");

// Creates the details for a  connection to the mysql database
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root", // User Name
  password: "Progress!8413010", // User password
  database: "classicmodels", // Database Name
});

// --------------------------------_

conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected to server");
  }
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (err, res) => {
  res.send("good");
});


app.get("/Products", (req, res) => {
  const sql = "SELECT * FROM products";
  conn.query(sql, (err, results) => {
    res.send(results);
  });
});



app.get("/orders", (req, res) => {
  const sql = "SELECT * FROM orders";
  conn.query(sql, (err, results) => {
    res.send(results);
  });
});




app.get("/ordersdetails", (req, res) => {
  const sql = "SELECT * FROM ordersdetails";
  conn.query(sql, (err, results) => {
    res.send(results);
  });
});


app.get("/offices", (req, res) => {
  const sql = "SELECT * FROM offices";
  conn.query(sql, (err, results) => {
    res.send(results);
  });
});



app.get("/employees", (req, res) => {
  const sql = "SELECT * FROM employees";
  conn.query(sql, (err, results) => {
    res.send(results);
  });
});




app.get("/customers", (req, res) => {
  const sql = "SELECT * FROM customers";
  conn.query(sql, (err, results) => {
    res.send(results);
  });
});




















app.use(express.static("assets"));
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
app.listen(3001, () => {
  console.log("Server started on port 3001");
});

