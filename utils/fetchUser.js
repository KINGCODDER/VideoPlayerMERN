const jwt = require("jsonwebtoken");

exports.fetchUser = (req, res, next) => {
  // GET the user from the jwt token and add id to req object
  console.log("Hello");
  const token = req.params.token;
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  const data = jwt.verify(token, process.env.JWT_SECRET);
  console.log("in middleware");
  console.log(data);
  req.user = data.user;
  next();
};
