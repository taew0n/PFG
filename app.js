const express = require('express');
const app = express();
const home = require('./routes/index');
const cors = require('cors')();

app.set('views', "./views");
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

app.use('/',home); // routing

module.exports = app;