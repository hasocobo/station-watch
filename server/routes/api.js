import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

const router = express.Router();

let token = "";


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('JWT Payload:', jwt_payload);
    if (jwt_payload.username === 'admin' && jwt_payload.password === 'password') { //burayı değiştir
      return done(null, { username: 'admin', password: 'password' });
    } else {
        return done(null, false);
    }
  })
);

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin'  && password === 'password') { //burayı değiştir
    token = jwt.sign({ username: username, password: password }, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({ token });
  }
  else {
    res.status(401).json();
  }
});

router.get('/login', (req, res) => {
  res.json({ token });
})

router.get('/home', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json();
})


export default router;