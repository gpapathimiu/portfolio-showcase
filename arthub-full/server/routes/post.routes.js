const PostController = require("../controllers/posts.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app, upload) => {
	app.get("/api/posts", authenticate, PostController.findAllPosts);
	app.get("/api/post/:id", authenticate, PostController.findPost);
	app.post("/api/post/new", upload.single("image"), PostController.createPost);
	app.put("/api/post/like/:id", authenticate, PostController.likePost);
	app.put("/api/post/dislike/:id", authenticate, PostController.dislikePost);
	app.post('/api/post/comment/:id', authenticate, PostController.addCommentToPost);
	app.get("/api/posts/sorted", authenticate, PostController.findSortedPosts);
	app.get("/api/users/posts/:id", authenticate, PostController.findAllPostsByUser);
	app.delete("/api/post/delete/:id", authenticate, PostController.deletePost);
};
