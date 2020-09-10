import mySQL from 'mysql';

// MySQL Config running locally
let mySQLClient = mySQL.createConnection({
  host: 'localhost',
  user: 'root',
  password: '******',
  database: 'crossref'
});

mySQLClient.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

mySQLClient.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Database connection is closing.');
  mySQLClient.destroy();
  console.log('Database connection is closed.');
});

export default mySQLClient;