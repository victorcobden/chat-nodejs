var homeController = function(server,io){
	
	io.on('connection',function(socket){
		console.log('nuevo usuario conectado');
	});

	server.route('/')
		.get(function(req,res){
			if (req.user) {
				var name = req.user.displayName;
				var url_foto = 'http://graph.facebook.com/'+req.user.id + '/picture';
				res.render('home/index',{
					name:name,
					foto:url_foto
				});	
			}
			else
			{
				res.render('home/index');
			}
			
		});
	server.route('/auth/logout')
		.get(function(req,res){
			req.session.destroy();
			res.redirect('/');
		});

};

module.exports = homeController;