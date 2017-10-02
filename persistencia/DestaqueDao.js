function DestaqueDao(connection) {
   this._connection = connection;



 }


 DestaqueDao.prototype.salva = function(destaque,callback) {
console.log("Entrou no salva");



/*   this._connection.query('SELECT NOW()', (err, res) => {
     console.log(err, res)
     this._connection.end()
   })*/

   const text = 'INSERT INTO intranet.destaques(titulo, endereco) VALUES($1, $2) RETURNING *'
   const values = ['brianc', 'brian.m.carlson@gmail.com']


   this._connection.query(text, values, (err, res) => {
     if (err) {
       console.log(err.stack)
     } else {
       console.log(res.rows[0])
       // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
     }
   })


/*
   this._connection.query(text, values, (err, res) => {
     if (err) {
       console.log(err.stack)
     } else {
       console.log(res.rows[0])
       // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
     }
   })
*/
/*
this._connection.query('select * from intranet.destaques',callback);*/
    //this._connection.query("INSERT INTO destaques(titulo) values($1)", ['Ronald']);
     /*this._connection.query('INSERT INTO intranet.destaques SET ?', destaque, callback);*/
 }

 DestaqueDao.prototype.lista = function(callback) {
     this._connection.query('select * from intranet.destaques',callback);
 }

 DestaqueDao.prototype.buscaPorId = function (id,callback) {
     this._connection.query("select * from intranet.destaques where id = ?",[id],callback);
 }

 module.exports = function(){
     return DestaqueDao;
 };

/*
 {
 "titulo": "teste",
 "endereco": "teste",
 "descricao" : "teste",
 "mostra_descricao" : "1",
 "ativo" : "1",
 "dt_criacao" :  "2017-07-01",
 "dt_exclusao" : "2017-07-01",
 "imagem" : "teste" }
*/
/*
CREATE TABLE intranet.destaques
(
  id serial NOT NULL,
  titulo character varying,
  endereco text,
  descricao text,
  mostra_descricao "char",
  ativo "char",
  dt_criacao time without time zone,
  dt_exclusao time without time zone,
  imagem character varying,
  CONSTRAINT destaques_pkey PRIMARY KEY (id)
)*/
