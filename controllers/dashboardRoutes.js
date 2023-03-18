// Dashboard Routes
const router = require("express").Router();
const { Post, User, Comment } = require("../models/");
const { restore } = require("../models/user");
const withAuth = require("../utils/auth");

// get all the posts made from all users 
router.get("/", withAuth, async (req, res) => {
  const postsData = await Post.findAll ({
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username", "id", "email"]
      },
      {
        model: Comment,
        include: [
          {
            model: User,
            attributes: ["username", "id", "email"]
          }
        ]
      }
    ],
    
  });
  const posts = postsData.map((post) => post.get ({ plain: true}));
  console.log(posts);
  res.render("admin-all-posts", {layout: "dashboard", posts});
});

// for user posts only 
router.get("/profile", withAuth, async (req, res) => {
  const postsData = await Post.findAll ({
    where: { userId: req.session.userId },
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"]
      }
    ],
  });
  const  posts = postsData.map((post) => post.get ({ plain: true}));
  console.log(posts);
  res.render("users-post", {layout: "dashboard", posts});
});

// It should display a form for creating a new post
router.get("/create", withAuth, async (req, res) => {
  res.render('create-post', {layout: "dashboard",});
});

module.exports = router;

