
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const COLLECTTION = 'users';

const UserSchema = new Schema({
    uid: { type: Number },
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: false,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    updateTime: Number,
});

UserSchema.set('autoIndex', true);
const User = mongoose.model(COLLECTTION,UserSchema);
module.exports = User;