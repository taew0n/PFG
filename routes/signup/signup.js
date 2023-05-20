const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
var router = express.Router();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'sogongae'
});

connection.connect(); //mysql 연동

app.use(express.json());
app.use(express.urlencoded({extended:true})); //parsing web post string

router.get('/',function(req,res){
    res.render('signup');
}); //web rendering

router.post('/', function(req, res) {
    const id = req.body.id;
    const pw = req.body.pw;
    const name = req.body.name;
    const doubleMajor = req.body.doubleMajor === true ? 1 : 0;
    const admissionYear = parseInt(req.body.admissionYear);
    const graduationYear = parseInt(req.body.graduationYear);
    const passSubject = req.body.passSubject === true ? 1 : 0;
    const passThreeQuality = req.body.passThreeQuality === true ? 1 : 0;

    var sql_insert = { id: id, pw: pw, name: name, doubleMajor: doubleMajor, admissionYear: admissionYear, graduationYear: graduationYear, passSubject: passSubject, passThreeQuality: passThreeQuality };
    connection.query('insert into member set ?', sql_insert, function(err, rows) {
        if (err)
            throw err;
        console.log("signup clear");
        res.json({ 'result': 'ok' });
    });
});//post시 해당 값을 sql에 전달함
//추가적으로 sql에 값을 넣기 전 유효성 검사하는 부분이 필요.
module.exports = router