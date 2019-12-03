var  express = require('express');
var mysql=require('mysql');
var connection=mysql.createConnection(
    {
        host:'172.18.0.120',
        database:'employee',
        user:'root',
        password:'manager',
        port:9099

    }
);
var app = express();
app.use(express.json());
connection.connect();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/', (req, responce) => {
    var sql =`select * from Emp`;
    connection.query(sql,(err,result)=>{
        if(err==null)
        {
            responce.send(JSON.stringify(result));        
        }
        else{
            responce.send(JSON.stringify(err));
        }
    })
});
app.listen(9898,()=>{
    console.log("Server Started!!!");
})