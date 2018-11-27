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
accessToken => {
    console.log(accessToken);
}
));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

const PORT = process.env.PORT || 5000;
app.listen(PORT);