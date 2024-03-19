const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Your blog must have a title!"]
    },
    description: {
        type: String,
        minlength: [8, "Your blog's description must be more than 8 characters!"]
    },
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    approved: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema)