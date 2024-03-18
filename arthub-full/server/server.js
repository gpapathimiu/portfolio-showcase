const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const socket = require("socket.io");
const cookieParser = require("cookie-parser");
const port = 8000;
const path = require("path");

require("dotenv").config();

app.use(
	cors({
		origin: ["http://localhost:5173", "http://localhost:8000"],
		credentials: true,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const server = app.listen(port, () => {
	console.log(`Listening on Port ${port}`);
});

const io = socket(server, {
	cors: {
		origin: ["http://localhost:5173", "http://localhost:8000"],
		methods: ["GET", "POST"],
		credentials: true,
	},
});

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		return cb(null, path.join(__dirname, "../client/public/Images"));
	},

	filename: function (req, file, cb) {
		return cb(null, `${Date.now()}_${file.originalname}`);
	},
});
const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
	console.log("socket id: " + socket.id);

	socket.on("like", (data) => {
		io.emit("update-likes", data);
	});

	socket.on("dislike", (data) => {
		io.emit("update-dislikes", data);
	});

	socket.on("new-comment", (data) => {
        io.emit("update-comment", data);
    });
});

require("./config/mongoose.config");
require("./routes/post.routes.js")(app, upload);
require("./routes/user.routes.js")(app);

module.exports = io;
