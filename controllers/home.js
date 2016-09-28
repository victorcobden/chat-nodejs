var homeController = function(server){
	
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

};

module.exports = homeController;