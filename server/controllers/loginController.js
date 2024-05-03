const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
require('dotenv').config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET || "hello";

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('JWT Payload:', jwt_payload);
    if (jwt_payload.username === 'admin' && jwt_payload.password === 'password') { // admin password yerine db'deki userlar gelecek
      return done(null, { username: 'admin', password: 'password' }); //done fonksiyonu syntax'i: function done(info, user) { req.user = user } 
    } else {
      return done(null, false);
    }
  })
);

//ayrı dosyada olacak
exports.authenticateUser = passport.authenticate('jwt', { session: false });

//test amaçlı.
exports.getHome = (req, res) => {
  res.status(200).json();
}

exports.logIn = (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {// admin password yerine db'deki userlar gelecek
      const token = jwt.sign({ username: username, password: password }, opts.secretOrKey, { expiresIn: '1h' });
      res.json({ token });
    }
    else {
      res.status(401).json();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
