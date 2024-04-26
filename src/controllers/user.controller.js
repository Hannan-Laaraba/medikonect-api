import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";



export const signup = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  try {
    const user = await User.create(req.body);
    res.status(201).json({ user: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// export const signup = async (req, res) => {
//   const salt = bcrypt.genSaltSync(10);
//   const hashedPassword = await bcrypt.hash(req.body.password, salt);
//   req.body.password = hashedPassword;
//   const user = await User.create(req.body);
//   res.status(201).json({ user: user });
// };

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  
    if (user === null) {
    console.log('error')
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (validPassword === false) {
      console.log('error')
    }

    const token = jwt.sign({ id: user._id }, "secret_key",
       {expiresIn: "30days" });
       console.log(token)
       res.status(201).json({ token: token });

};

