const adminMiddleware = async (req, res, next) => {
    try {
      console.log('User from adminMiddleware:', req.user); // Log the user object to verify it
      const adminRole = req.user.isAdmin;
      if (!adminRole) {
        return res.status(403).json({ message: 'Access Denied. User is not an admin.' });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = adminMiddleware;
  