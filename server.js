const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'mru_clothing',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Create API endpoint to handle user login data insertion
app.post('/login', (req, res) => {
  const {email, password,name } = req.body;
  const query = `INSERT INTO login (email, password,name) VALUES ('${email}', '${password}','${name}')`;
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error inserting login data:', err);
      res.status(500).json({ success: false, message: 'Error inserting login data' });
    } else {
      console.log('Login data inserted successfully');
      res.status(200).json({ success: true, message: 'Login data inserted successfully' });
    }
    
  });
});


// API endpoint to add cart item
app.post('/cart/add', (req, res) => {
  const { name, price, imageUrl } = req.body.product;
  const query = `INSERT INTO cartitems (name, price, image_url) VALUES (?, ?, ?)`;
  const values = [name, price, imageUrl];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting cart item:', err);
      res.status(500).json({ success: false, message: 'Error inserting cart item' });
    } else {
      console.log('Cart item inserted successfully');
      res.status(200).json({ success: true, message: 'Cart item inserted successfully' });
    }
  });
});

// API endpoint to remove cart item
app.post('/cart/remove', (req, res) => {
  const { name } = req.body.item;
  const query = `DELETE FROM cartitems WHERE name = ?`;
  const values = [name];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error removing cart item:', err);
      res.status(500).json({ success: false, message: 'Error removing cart item' });
    } else {
      console.log('Cart item removed successfully');
      res.status(200).json({ success: true, message: 'Cart item removed successfully' });
    }
  });
});





app.get('/', (req, res) => {
  res.send('Welcome to the University Clothing website');
});

// Start the server
const port = 3306;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
