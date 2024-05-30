const mongoose = require('mongoose');

const labSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , 'Please provide a name'],
        unique: true,
        minlength: 3
    },
    
    stations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Station'
    }]
});

const Lab = mongoose.model('Lab', labSchema);

module.exports = Lab;