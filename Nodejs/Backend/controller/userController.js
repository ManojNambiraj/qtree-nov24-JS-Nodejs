const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const controller = {
  async createUser(req, res) {
    try {
      const { name, age, email, password, mobile } = req.body;

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const findExistingUser = await User.findOne({ email });

      if (!findExistingUser) {
        const createdData = await User.create({
          name,
          age,
          email,
          password: hashedPassword,
          mobile,
        });

        res
          .status(200)
          .json({ message: "User Registered Successfully", createdData });
      } else {
        res.status(409).json({ message: "User email already exist" });
      }
    } catch (error) {
      res.status(500).json({ message: "Something went wrong", error });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const findExistingUser = await User.findOne({ email });

      if (findExistingUser) {
        const compare = await bcrypt.compare(
          password,
          findExistingUser.password
        );

        if (compare) {
          const token = jwt.sign({ id: findExistingUser._id }, "abcdefgh", {
            expiresIn: "1hr",
          });

          res.status(200).json({ message: "User Login Successfully", token });
        } else {
          res.status(401).json({ message: "Invalid password" });
        }
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Something went wrong", error });
    }
  },
};

module.exports = controller;
