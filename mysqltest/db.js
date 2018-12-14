module.exports = {
 showAll,
 add
}

var mysql      = require("mysql");
var connection;

function openConnection(){
    connection = mysql.createConnection({
          host     : "127.0.0.1",
          user     : "root",
          password : "root",
          database : "nodejs"
        });
    connection.connect();
}
function closeConnection(){
    connection.end();  
}
 
function showAll(){
    openConnection();
    var  sql = "SELECT * FROM category_ order by id asc";
    connection.query(sql,function (err, results) {
        if(err){
            console.log("[SELECT ERROR] - ",err.message);
            return;
        }
        if(results)
        {
            for(var i = 0; i < results.length; i++)
            {
                console.log("%d\t%s", results[i].id, results[i].name);
            }
        }  
    });
    closeConnection();     
}

function add(name){
    openConnection();
    var params = [null,name];  
    var  sql = "insert into category_ values (?,?)";
    connection.query(sql,params,function (err, result) {
        if(err){
         console.log("[INSERT ERROR] - ",err.message);
         return;
        }       
       console.log("insert success, the generated id is:",result.insertId);       
    });
    closeConnection(); 
}
