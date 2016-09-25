//authentication.js


module.exports.isAuthenticated = function (req, res, next) {
  //if (req.isAuthenticated()) 
  if (true) {
    return next();
  }
  res.sendStatus(401);
};