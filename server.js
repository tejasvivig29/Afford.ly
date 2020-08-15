/**
 * Contributed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 * 
 */

const express = require("express");
const path = require("path");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const supportRoutes = require("./api/Routes/SupportRoutes");
const forgot_password = require("./api/Routes/forgot_password");
const create_password = require("./api/Routes/create_password");

app.use(cors()); // cross-origin request handler
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// connecting to mongoDB Atlas
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://affordly:affordly123@cluster0.lzi2l.mongodb.net/affordly?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
app.use("/support", supportRoutes);

const postRoute = require('./api/Routes/postRoute');
const commentRoute = require('./api/Routes/commentRoute');

const current_user = require('./api/Routes/current_user');
const login = require('./api/Routes/login');
const user = require('./api/Routes/user');
const feedback = require('./api/Routes/feedback');
const payment = require("./api/Routes/payment");
const share = require("./api/Routes/share");
app.use("/api/current_user", current_user);
app.use("/api/login", login);
app.use("/api/user", user);
app.use("/api/create_password", create_password);
app.use("/api/forgot_password", forgot_password);
app.use("/api", postRoute);
app.use("/feedback", feedback);
app.use("/api/comment", commentRoute);


// Serve the static files
app.use(express.static(__dirname + "/affordly/build/"));


app.use("/payment", payment);
app.use("/share", share);

app.get("/*", (req, res) => {
  //defining the path for the static files
  res.sendFile(path.join(__dirname + "/affordly/build/index.html"));
});

const port = process.env.PORT || 3000; // defining a port
app.listen(port, () => {
  console.log("server is listening on :  ", port);
});