const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true
});


const User = new mongoose.model('User', userSchema)

module.exports = User; 