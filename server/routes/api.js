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
    if (jwt_payload.username === 'admin' && jwt_payload.password === 'password') {
      return done(null, { username: 'admin', password: 'password' });
    } else {
        return done(null, false);
    }
  })
);

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin'  && password === 'password') {
    token = jwt.sign({ username: username, password: password }, process.env.JWT_SECRET, {expiresIn: '20s'});
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
  res.json({ message: "success" });
})


export default router;