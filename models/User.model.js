const mongoose = require('../mongoose').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    password: String,
    permission_level: Number,
});

const User = mongoose.model('User', userSchema);

exports.findById = (id) => {
    return User.find({ _id: id });
}

exports.findByUsername = (username) => {
    return User.find({ username: username });
}

exports.create = (data) => {
    // Create our usefull data arrays
    if ( !data.rolls ) data.rolls = [];
    if ( !data.roll_presets ) data.roll_preset = [];
    if ( !data.characters ) data.characters = [];
    const user = new User(data);
    return user.save();
};

exports.addRoll = (data) => {

}