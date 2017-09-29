module.exports = function(app){
	app.get('/destaques', function(req, res){

		console.log('Recebida a Req ');
		res.send('OK ');
	});
	app.post("/destaques/destaque",function(req, res) {
		var destaque = req.body;
		console.log(destaque);
		res.send('ok');
   });



}
