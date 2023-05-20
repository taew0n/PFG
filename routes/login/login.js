const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
var router = express.Router();

const options = {
    host:'localhost',
    user:'root',
    password:'1234',
    database:'sogongae'
};


const connection = mysql.createConnection(options);

router.get('/',function(req,res){
    res.render('login');
})

router.post('/', function(req, res) {
    const id = req.body.id;
    const pw = req.body.pw;
    console.log(id,pw);
    const searchid = '%' + id + '%';
    connection.query('select * from member where id LIKE ?', [searchid] , function(err, rows) {
        if(err)
            throw err;
        if(rows && rows.length){
            if(rows[0].id == id){
                const searchpw = '%' + pw + '%';
                connection.query('select * from member where pw LIKE ?', [searchpw], function(err, rows){
                    if(err)
                        throw err;
                    if(rows.length){
                        if(rows[0].pw == pw){
                            console.log("signup clear");
                            var status = {"status":200,"redirect":"/hidden"};
                            res.json(status);  
                        } 
                    }
                });
                
            }
        }
    });
});//post시 해당 값을 sql에 전달함

module.exports = router