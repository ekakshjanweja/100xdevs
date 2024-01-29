const express = require("express");
const zod = require("zod");
const { User } = require("../db/db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { Account } = require("../db/db");

const router = express.Router();

const signUpBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(6),
});

const signInBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

const updatedBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.post("/signup", async (req, res) => {
  const { success } = signUpBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const exsistingUser = await User.findOne({
    username: req.body.username,
  });

  if (exsistingUser) {
    return res.status(411).json({
      message: "Email aleady taken.",
    });
  }

  const user = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully.",
    token: token,
  });
});

router.post("/signin", async (req, res) => {
  const { success } = signInBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({ token: token });
    return;
  }

  res.status(411).json({
    message: "Error while logging in.",
  });
});

router.put("/", async (req, res) => {
  const { success } = updatedBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Error while updating the information.",
    });
  }

  await User.updateOne(req.body, {
    _id: req.userId,
  });

  res.json({
    message: "User updated successfully.",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
