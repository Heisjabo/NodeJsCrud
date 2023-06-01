const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
});

module.exports = mongoose.model('task', taskSchema);