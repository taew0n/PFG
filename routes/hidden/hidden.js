const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var router = express.Router();

app.set('views', "./views");
app.set('view engine', 'ejs');

router.get('/',function(req,res){
    res.render('hidden');
})

module.exports = router