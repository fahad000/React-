const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/Keys');

const User = mongoose.model('users');
passport.serializeUser ((user, done)=> {
 
    done(null, user.id);

});

passport.deserializeUser((id, done)=> {
 
User.findById(id).then(user =>{
    done(null, user);
    // handling promise do check for errors 
}).catch(err=>console.log(err));
})


passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
    //search for collection
    User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser){
            //we already have a record with the given profile ID 
            done(null, existingUser);
        }
        else{
        
            // we don't have a user record with this ID, make a new record 
            //save is saving record into database
            //creating a new modle instence 
            new User({ googleId: profile.id }).save()
            .then(user => done(null, user));
        }
    });
}
));