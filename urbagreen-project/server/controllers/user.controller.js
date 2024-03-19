const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
SECRET_KEY = 'WOW SO SECRET';

module.exports.login = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    if (user === null) {
        return res.status(400).json({ message: "User Not Found!" });
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if (!correctPassword) {
        return res.status(400).json({ message: "Incorrect Password" });
    }

    const usertoken = jwt.sign({
        id: user._id
    }, SECRET_KEY, { expiresIn: "2h" });


    console.log(`User Token is set to: `, usertoken);

    res.cookie("usertoken", usertoken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 2 }).json({ message: "Login successful", user: user });
};


module.exports.register = async (req, res) => {
    try {
        let isAdmin = false;
        const existingUsersCount = await User.countDocuments();
        if (existingUsersCount === 0) {
            isAdmin = true;
        }

        const newUser = await User.create({ ...req.body, isAdmin });

        const userToken = jwt.sign({
            id: newUser._id
        }, SECRET_KEY, { expiresIn: "2h" });

        res.cookie("usertoken", userToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 2 }).json({ msg: "Registered!", user: newUser });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

module.exports.logout = (req, res) => {
    res.clearCookie("usertoken").sendStatus(200).json({ message: "Logged out!" })
}

module.exports.findUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneUser => {
            res.json({ user: oneUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}