const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "Sorry a user with this email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = user.generateAuthToken();
    res
      .cookie("token", token, {
        httpOnly: true,
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
      })
      .status(200)
      .json({
        status: "success",
        token: token,
        data: {
          user: user,
        },
      });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ errors: "Please login with correct credentials" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res
        .status(400)
        .json({ errors: "Please login with correct credentials" });
    }

    const token = user.generateAuthToken();
    res
      .cookie("token", token, {
        httpOnly: true,
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
      })
      .status(200)
      .json({
        status: "success",
        token: token,
        data: {
          user: user,
        },
      });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.verify = async (req, res, next) => {
  try {
    if (!req.user) {
      return new Error("Cannot verify");
    }
    const user = await User.findById(req.user);
    res.status(200).json({
      status: "success",
      token: req.header("jwt-token"),
      data: {
        user: user,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(403).json({ status: "fail", message: "Cannot verify you" });
  }
};

exports.fetchUser = (req, res, next) => {
  // GET the user from the jwt token and add id to req object

  const token = req.header("jwt-token");
  try {
    if (!token) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data._id;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};
