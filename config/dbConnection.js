const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '948|_|$364',
  database : 'final_project'
});
 
const dbConnection = connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected with id ' + connection.threadId);
  });


module.exports = connection;