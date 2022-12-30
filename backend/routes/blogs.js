const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");
const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");
//so the home route ('/') is prepended with '/api/blogs' ///

const requireAuth = require("../middleware/requireAuth");

// require auth for all workout routes//
router.use(requireAuth);


// to GET all blogs //
// we just going to use getBlogs because that has our find({}) fxn (in the controller) //
router.get("/", getBlogs);

// to GET a single blog //
router.get("/:id", getBlog);

// to POST a single blog ///
// use model to add new document to blogs db collection//
//then i cleaned this up by creating controllers, moving this fxn to only the controller //
router.post("/", createBlog);

// to UPDATE a single blog //
router.patch("/:id", updateBlog);

// to DELETE a single blog //
router.delete("/:id", deleteBlog);

module.exports = router;
