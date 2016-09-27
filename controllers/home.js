var homeController = function(server){
	
	server.route('/')
		.get(function(req,res){
			res.end('Hola, usando el controlador home');
		});

};

module.exports = homeController;