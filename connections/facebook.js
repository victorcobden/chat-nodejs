var passport = require('passport'),
facebookStrategy = require('passport-facebook').Strategy;

var facebookConnection = function (server) {
	passport.use(new facebookStrategy({
		clientID : '1744494469158439',
		clientSecret : 'de1565cdd5e4f9df083f7f55332dcf6b',
		callbackURL: 'http://localhost:4000/auth/facebook/callback'
	},function (accessToken,RefreshToken,profile,done) {
		done(null,profile);
	}));

	server.get('/auth/facebook',passport.authenticate('facebook'));

	server.get('/auth/facebook/callback',passport.authenticate('facebook',{successRedirect:'/'}));
}

module.exports = facebookConnection;