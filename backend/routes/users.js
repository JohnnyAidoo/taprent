const express = require("express");
const router = express.Router();
const bcript = require("bcrypt");
const users_model = require("../models/users");
const users = require("../models/users");

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await users_model.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get one user
router.get("/:id", (req, res) => {
  const id = req.params.id;

  users_model
    .findById(id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal server error", error });
    });
});

//create new user
router.post("/", async (req, res) => {
  const salt = await bcript.genSalt();
  const hashedPassword = await bcript.hash(req.body.password, salt);

  const user = new users_model({
    name: req.body.name,
    displayPicture: req.body.displayPicture,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
    password: hashedPassword,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

//login user
router.post("/login", (req, res) => {
  if (!req.body.phoneNumber || !req.body.password) {
    res.status(401).json({ message: "Phone number and Password is required" });
    return;
  }
  try {
    //checking if user exists
    users_model
      .findOne({ phoneNumber: req.body.phoneNumber })
      .then(async (user) => {
        if (!user) {
          //user does not exist
          res.status(401).json({ message: "User not found" });
        }
        if (user) {
          //user exists
          const match = await bcript.compare(req.body.password, user.password);
          if (!match) {
            res.status(401).json({ message: "Invalid password" });
          } else {
            res.status(200).json({ message: "Login success", userId: user.id });
          }
        }
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error" });
  }
});

//update one user
router.patch("/update/:id", async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const Updated = await users
    .findByIdAndUpdate(req.params.id, {
      $set: { description: description, name: name },
    })
    .then(() => {
      res.json({ message: "success" });
    });
});
//delete one user
router.delete("/:id", (req, res) => {});

module.exports = router;
