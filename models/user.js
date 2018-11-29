const mongoose = require('mongoose');
//const Schema = mongoose.Schema; line 2 is same as line 3 

const {Schema} = mongoose;
const userSchema = new Schema({
    googleId: String 
});
// telling mongoose that we want to create new collection called user 
mongoose.model('users', userSchema);