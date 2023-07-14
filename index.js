const path = require('path');
const express = require('express');
const app = express();
const static = path.join(__dirname,'./public');
app.use(express.static(static));
console.log(static);
app.listen(8080);