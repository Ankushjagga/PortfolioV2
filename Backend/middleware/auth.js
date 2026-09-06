const jwt = require("jsonwebtoken");
const User = require("../models/user");

const JWT_SECRET = process.env.JWT_SECRET || process.env.JWT_SECRETE;

const deny = (res, status, message) =>
  res.status(status).send({ isSuccess: false, data: null, message });

/**
 * Reads the bearer token (falling back to the `token` cookie), verifies it and
 * hangs the matching user off `req.user`. Everything downstream can assume a
 * real, still-existing user.
 */
const authenticate = async (req, res, next) => {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ")
      ? header.slice(7).trim()
      : req.cookies?.token;

    if (!token) {
      return deny(res, 401, "Authentication required");
    }

    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      const message =
        err.name === "TokenExpiredError"
          ? "Session expired, please login again"
          : "Invalid token";
      return deny(res, 401, message);
    }

    const user = await User.findById(payload._id);
    if (!user) {
      return deny(res, 401, "User no longer exists");
    }

    req.user = user;
    return next();
  } catch (error) {
    return deny(res, 500, error.message);
  }
};

/** Must run after `authenticate`. */
const requireAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return deny(res, 403, "Admin access only");
  }
  return next();
};

module.exports = { authenticate, requireAdmin, JWT_SECRET };
