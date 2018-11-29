const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const Keys = require('./config/Keys')
require('./models/user');
require('./services/passport'); 

mongoose.connect(Keys.mongoURi);
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000,
        keys:    [Keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);