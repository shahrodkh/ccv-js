const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, '../')));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
