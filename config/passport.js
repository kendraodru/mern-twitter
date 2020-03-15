const JwtStrategy = require('password-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = password => {
    password.use(new JwtStrategy(options, (jwt_payload, done)=>{
        console.log(jwt_payload);
        done();
    }))
}
