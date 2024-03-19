const Message = require('../models/message.model');

exports.createMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.status(201).json({ message });
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json({ messages });
    } catch (error) {
        console.error('Error retrieving messages:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteMessage = async (req, res) => {
    const messageId = req.params.id;

    Message.findByIdAndDelete(messageId)
        .then(() => {
            res.status(200).json({ message: "Message deleted successfully" });
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", error: err });
        });
};