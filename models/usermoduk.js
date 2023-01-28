const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "pleace enter the name"],
    },
    email: {
        type: String,
        required: [true, "pleace enter the email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "pleace enter the password"],
    },
},
    {
        timestamps: true
    });
module.exports = mongoose.model('User', userSchema)


