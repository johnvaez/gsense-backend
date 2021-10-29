import User from "../models/user.model";
import jwt from "jsonwebtoken";
import config from "../constant/config";
import message from "../constant/message";

export const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res
        .status(404)
        .json({ status: false, message: message.USER_NOT_FOUND });

    const matchPassword = await User.comparePassword(
      req.body.password,
      user.password
    );

    if (!matchPassword)
      return res.status(401).json({
        status: false,
        message: message.AUTENTICATION_ERROR,
      });

    const token = jwt.sign({ id: user._id }, config.SECRET, {
      expiresIn: 86400,
    });

    res.json({ status: true, token, user });
  } catch (error) {
    return res.status(500).json(error);
  }
};
