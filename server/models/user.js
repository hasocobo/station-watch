const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    role: {
        type: String,
        enum: ['technician', 'engineer', 'admin'],
        required: true
    }
});

// hash password before saving to database
userSchema.pre('save', function(next) {
    this.password = crypto.createHash('sha256').update(this.password).digest('hex');
    next();
});

// compare password
userSchema.methods.comparePassword = function(plainPassword) {
    const hash = crypto.createHash('sha256').update(plainPassword).digest('hex');
    return this.password === hash;
}


const User = mongoose.model('User', userSchema);

module.exports = User;
