const Post = require("../models/post.model.js");
const io = require("../server.js");

module.exports.findAllPosts = (req, res) => {
	Post.find()
		.then((allPosts) => {
			res.json({ posts: allPosts });
		})
		.catch((err) => {
			res.json({ message: "Something went wrong", error: err });
		});
};

module.exports.findPost = (req, res) => {
	Post.findOne({ _id: req.params.id })
		.then((onePost) => {
			res.json({ post: onePost });
		})
		.catch((err) => {
			res.json({ message: "Something went wrong", error: err });
		});
};

module.exports.createPost = (req, res) => {
	try {
		const { title, description, user } = req.body;
		const imageName = req.file.filename;

		console.log("FILENAME", req.file.filename);
		const newPost = new Post({
			title,
			description,
			image: `Images/${imageName}`,
			likes: [],
			comments: [],
			user,
		});

		newPost
			.save()
			.then((savedPost) => {
				res.json({ post: savedPost });
			})
			.catch((err) => {
				res.status(500).json({ message: "Something went wrong", error: err });
			});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports.findAllPostsByUser = (req, res) => {
	const userId = req.params.userId;

	Post.find({ "user._id": userId })
		.then((allPosts) => {
			res.json({ posts: allPosts });
		})
		.catch((err) => {
			res.json({ message: "Something went wrong", error: err });
		});
};

module.exports.findSortedPosts = (req, res) => {
	const sortBy = req.query.sort || "popular";
	if (sortBy === "popular") {
		Post.find()
			.sort({ popularity: -1 })
			.then((sortedPosts) => {
				res.json({ posts: sortedPosts });
			})
			.catch((err) => {
				res.json({ message: "Something went wrong", error: err });
			});
	} else if (sortBy === "date") {
		Post.find()
			.sort({ date: -1 })
			.then((sortedPosts) => {
				res.json({ posts: sortedPosts });
			})
			.catch((err) => {
				res.json({ message: "Something went wrong", error: err });
			});
	} else if (sortBy === "alphabetical") {
		Post.find()
			.sort({ title: 1 })
			.then((sortedPosts) => {
				res.json({ posts: sortedPosts });
			})
			.catch((err) => {
				res.json({ message: "Something went wrong", error: err });
			});
	}
};

module.exports.deletePost = (req, res) => {
	const postId = req.params.id;

	Post.findByIdAndDelete(postId)
		.then(() => {
			res.status(200).json({ message: "Post deleted successfully" });
		})
		.catch((err) => {
			res.status(500).json({ message: "Something went wrong", error: err });
		});
};

module.exports.likePost = async (req, res) => {
	const { id: postId } = req.params; 
	const { user } = req.body;

    console.log(postId, 'SERVER POST ID');
    console.log(user, 'SERVER USER');

	try {
		const post = await Post.findById(postId);

        console.log('STRINGY', JSON.stringify(post))

		if (!post) {
			return res.status(404).json({ error: "Post not found" });
		}

		const hasLiked = post.likes.includes(user);

		if (hasLiked) {
			return res.status(400).json({ error: "Post already liked" });
		}

		post.likes.push(user);
		await post.save();

		io.emit("update-likes", { postId, likes: post.likes.length });

		res
			.status(200)
			.json({ message: "Post liked successfully", likes: post.likes.length });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};


module.exports.dislikePost = async (req, res) => {
    const { id: postId } = req.params;
    const { user } = req.body; 

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const hasLiked = post.likes.includes(user);

        if (!hasLiked) {
            return res.status(400).json({ error: 'Post not liked yet' });
        }

        post.likes = post.likes.filter((userId) => userId.toString() !== user.toString());
        
        await post.save();

        io.emit('update-likes', { postId, likes: post.likes.length });

        res.status(200).json({ message: 'Post disliked successfully', likes: post.likes.length });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.addCommentToPost = async (req, res) => {
    const { id: postId } = req.params;
    const { text, user, userName } = req.body;

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const newComment = {
            text,
            user,
            userName,
            createdAt: new Date(),
        };

        post.comments.push(newComment);
        await post.save();
        io.emit('new-comment', { postId, comment: newComment });

        res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};