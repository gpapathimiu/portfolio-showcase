const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    enquiry: String,
    companyName: String,
    phone: String,
    subject: String,
    message: String,
    channel: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', MessageSchema);
