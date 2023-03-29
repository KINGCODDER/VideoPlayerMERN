const express = require("express");
const app = express();
const videoRoutes = require("./Routes/videoRoutes.js");
const userRoutes = require("./Routes/userRoutes.js");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));
dotenv.config({ path: "./config.env" });

app.use("/api/v1/videos", videoRoutes);
app.use("/api/v1/user", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend", "build", "index.html")),
      function (err) {
        if (err) {
          res.status(500).send({
            err,
          });
        }
      };
  });
}

module.exports = app;
