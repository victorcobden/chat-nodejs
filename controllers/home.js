var homeController = function(server,io){
	
	var users = [];

	io.on('connection',function(socket){
		socket.join('chat');
		socket.on('nuevo usuario',function(data){
			socket.broadcast.to('chat').emit('devolviendo usuario',data);
			console.log(data);
		})
		
	});	


	server.route('/')
	.get(function(req,res){
		if (req.user) {
			var name = req.user.displayName;
			var url_foto = 'http://graph.facebook.com/'+req.user.id + '/picture';

			var user = {
				name : req.user.displayName,
				foto : req.user.url_foto
			}

			users.push(user);
			
			res.render('home/index',{
				users:users,
				name:name,
				foto:url_foto
			});
		}
		else
		{
			res.render('home/index');
			console.log('usuario no conectado');
		}

	});
	server.route('/auth/logout')
	.get(function(req,res){
		io.on('disconnect', function () {
			console.log('usuario desconectado');
		});
		req.session.destroy();

		res.redirect('/');
	});

};

module.exports = homeController;