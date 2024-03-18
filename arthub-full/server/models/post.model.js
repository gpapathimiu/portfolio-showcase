const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    userName: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    _id: false
});

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Your post must have a title!"]
    },
    description: {
        type: String,
        minlength: [8, "Your post's description must be more than 8 characters!"]
    },
    image: {
			type: String,
			required: [true, "NO ARTWORK?!"]
		},
    likes: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    comments: [CommentSchema],
    user: {type: mongoose.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema)