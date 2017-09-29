
var  postgres = require('pg')

function createDBConnection(){
return client = new Client({
  host: 'localhost',
  port: 5334,
  user: 'postgres',
  password: 'jk29873bb',
});
}


module.exports = function() {
  return createDBConnection;
}
