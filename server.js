var express       = require('express'),
	swig	      = require('swig'),
	passport      = require('passport'),
	session       = require('express-session'),
	coockieParser = require('cookie-parser');

var server = express();

server.use(coockieParser());
server.use(session({ secret : 'clave' }));

passport.serializeUser(function(user,done){
	done(null,user);
});
passport.deserializeUser(function(user,done){
	done(null,user);
});

server.use(passport.initialize());
server.use(passport.session());

server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views',__dirname+'/views')
server.use(express.static('./public'));

require('./controllers/home')(server);

require('./connections/facebook')(server);

server.listen(4000);

console.log('Servidor iniciado');