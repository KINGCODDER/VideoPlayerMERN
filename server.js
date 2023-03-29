const mongoose = require("mongoose");
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connect successfully"));

app.listen(3005, () => {
  console.log(__dirname);
  console.log("App Listening on Port 3005");
});
