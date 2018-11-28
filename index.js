const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys = require('./config/Keys');



const app = express();
// app.get('/', (requestAnimationFrame, res) => {
//     res.send({hi: 'there'});

// });

passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
// (accessToken, refreshToken, Profile, done) => {
//     console.log('access token', accessToken);
//     console.log('refresh token', refreshToken);
//     console.log('profile', Profile);
// }

accessToken => {
    console.log(accessToken);
}
));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);