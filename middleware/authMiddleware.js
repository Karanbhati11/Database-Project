// authMiddleware.js

module.exports = (req, res, next) => {
  if (!req.session?.userInfo || !req.session?.userInfo?.userID) {
    // User is not logged in, redirect to login page or any other page
    return res.redirect("/login");
  }
  // User is logged in, proceed to the next middleware
  next();
};
