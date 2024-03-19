const jwt = require("jsonwebtoken");
const secret = 'WOW SO SECRET';
module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({verified: false, error: err});
        }
        else {
            next();
        }
    });
}

module.exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: "Unauthorized" });
    }
};