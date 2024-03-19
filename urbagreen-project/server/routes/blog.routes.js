const BlogController = require("../controllers/blog.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
	app.get("/api/blogs", BlogController.findAllBlogs);
	app.get("/api/blog/:id", BlogController.findBlog);
	app.post("/api/blog/new", authenticate, BlogController.createBlog);
	app.get("/api/users/blogs/:id", authenticate, BlogController.findAllBlogsByUser);
	app.delete("/api/blog/delete/:id", authenticate, BlogController.deleteBlog);
    app.get("/api/blogs/pending", BlogController.findPendingBlogs);
	app.post("/api/blogs/approve/:id", authenticate, BlogController.approveBlog);
};
