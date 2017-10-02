module.exports = function(app){
	app.get('/destaques', function(req, res){

		console.log('Recebida a Req ');
		res.send('OK ');
	});
	app.post("/destaques/destaque",function(req, res) {
		var destaque = req.body;
		console.log('cadastrando  destaque...');


		req.assert("titulo", "Titulo é obrigatório.").notEmpty();
		/*req.assert("valor", "Valor é obrigatório e deve ser um decimal.").notEmpty().isFloat();
		req.assert("moeda", "Moeda é obrigatória e deve ter 3 caracteres").notEmpty().len(3,3);*/


		var errors = req.validationErrors();

    if (errors){
        console.log("Erros de validação encontrados");
        res.status(400).send(errors);
        return;
    }




		var connection = app.persistencia.connectionFactory();
	  var destaqueDao = new app.persistencia.DestaqueDao(connection);



		destaqueDao.salva(destaque, function(exception, result){
	      console.log('destaque criado: ' + result);

	      res.location('/destaques/destaque/' + result.insertId);

	      destaque.id = result.insertId;

	      res.status(201).json(destaque);
	  });


   });






}
