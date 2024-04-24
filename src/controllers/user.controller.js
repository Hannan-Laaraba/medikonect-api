import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      email,
      password,
      phoneNumber,
      address,
      medicalHistory,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const User = new User({
      firstName,
      lastName,
      dateOfBirth,
      gender,
      email,
      password,
      phoneNumber,
      address,
      medicalHistory,
    });
    await username.save();
    res.status(201).json({ messsage: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password!!" });}
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      return res.status(401).json({ error: "Invalid email or password!!" });
    }

    const token = jwt.sign({ id: user._id }, "secret_key",
       {expiresIn: "30days" });
      res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

