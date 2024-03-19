const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const port = 8000;


app.use(
	cors({
		origin: ["http://localhost:5173"],
		credentials: true,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

require('./config/mongoose.config');
require('./routes/user.routes.js')(app);
require('./routes/blog.routes.js')(app);
require('./routes/message.routes.js')(app);


app.listen(port, () => console.log(`The server is all fired up on port ${port}`));

