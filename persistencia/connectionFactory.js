const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:jk29873bb@localhost:5432/postgres'
console.log("passando connection factory ");
function createDBConnection(){
  console.log("passando new pool ");

  return pool = new Pool({

    connectionString: connectionString,
  })


/*
  const client = new Client({
    connectionString: connectionString,
  })


  client.connect()

  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })
*/

}

module.exports = function() {
  return createDBConnection;
}
