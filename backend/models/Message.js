var mongoose = require('mongoose');
const schema = mongoose.Schema;

const msgSchema = new schema({
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },


})
module.exports = Message = mongoose.model('messages', msgSchema)