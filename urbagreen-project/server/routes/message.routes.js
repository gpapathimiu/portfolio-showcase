const MessageController = require("../controllers/message.controller.js");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
	app.get("/api/messages", authenticate, MessageController.getAllMessages);
	app.post("/api/message", MessageController.createMessage);
	app.delete("/api/delete/:id", MessageController.deleteMessage);
};
