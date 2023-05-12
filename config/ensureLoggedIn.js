

module.exports = function(req, res, next) {
    // Status code of 401 is Unauthorized
    //checks if req.user is present, ie a user is logged in
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay
    next();
  };