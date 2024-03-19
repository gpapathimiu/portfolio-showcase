const Blog = require("../models/blog.model.js");

module.exports.findAllBlogs = (req, res) => {
    Blog.find({ approved: true }) 
        .then((allBlogs) => {
            res.json({ blogs: allBlogs });
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", error: err });
        });
};

module.exports.findBlog = (req, res) => {
	Blog.findOne({ _id: req.params.id })
		.then((oneBlog) => {
			res.json({ blog: oneBlog });
		})
		.catch((err) => {
			res.json({ message: "Something went wrong", error: err });
		});
};

module.exports.createBlog = (req, res) => {
	try {
		const { title, description, user } = req.body;
		const newBlog = new Blog({
			title,
			description,
			user,
		});

		newBlog
			.save()
			.then((savedBlog) => {
				res.json({ blog: savedBlog });
			})
			.catch((err) => {
				res.status(500).json({ message: "Something went wrong", error: err });
			});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports.findAllBlogsByUser = (req, res) => {
	const userId = req.params.userId;

	Blog.find({ "user._id": userId })
		.then((allBlogs) => {
			res.json({ blogs: allBlogs });
		})
		.catch((err) => {
			res.json({ message: "Something went wrong", error: err });
		});
};

module.exports.deleteBlog = (req, res) => {
	const blogId = req.params.id;

	Blog.findByIdAndDelete(blogId)
		.then(() => {
			res.status(200).json({ message: "Blog deleted successfully" });
		})
		.catch((err) => {
			res.status(500).json({ message: "Something went wrong", error: err });
		});
};


module.exports.findPendingBlogs = (req, res) => {
    Blog.find({ approved: false }) 
        .then((pendingBlogs) => {
            res.json({ blogs: pendingBlogs });
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", error: err });
        });
};

module.exports.approveBlog = (req, res) => {
    const blogId = req.params.id;

    Blog.findByIdAndUpdate(blogId, { approved: true }, { new: true })
        .then((approvedBlog) => {
            res.json({ blog: approvedBlog });
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", error: err });
        });
};