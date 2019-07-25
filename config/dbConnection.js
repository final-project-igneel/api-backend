const mysql      = require('mysql2');

var connection = mysql.createConnection({host: "SG-FinalIgneel-987-master.servers.mongodirector.com", user: 'root', password: 'qQ1!qQ1!qQ1!', database: 'final_igneel', port: 3306});

const dbConnection = connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected with id ' + connection.threadId);
  });


module.exports = connection;