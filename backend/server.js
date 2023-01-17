const express = require("express");
const app = express();
const cors = require("cors");

// use mongoose, an ODM library (object-database-modelling) which allows us to use methods (post, patch, etc) //
// to read and write database documents. It also allows to use schemas and models for more accuracy //
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogs");
const userRoutes = require("./routes/user");


// require .env//
require("dotenv").config();
// add middleware, in this case the 'next' package to log our requests//
// this will log out the requests that are coming in//
app.use((req, res, next) => {
  console.log("Path is '" + req.path + "',", "Method is " + req.method);
  next();
});
// add middleware (express.json) which allows us to access req.body for request data //
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:10000", "https://the-mern-blog-frontend.onrender.com"]
}));

//prepend api/blogs to all requests to blogRoutes//
app.use("/api/blogs", blogRoutes);
app.use("/api/user", userRoutes);


// connect to db now using mongoose, and make sure db is connected before we listen to requests//
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
