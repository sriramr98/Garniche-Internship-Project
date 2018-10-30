const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/items', (req, res) => {
  const jsonData = fs.readFileSync('data.json');
  res.json(JSON.parse(jsonData));
});


app.listen(3000, () => {
  console.log(`Server started on PORT 3000`);
});