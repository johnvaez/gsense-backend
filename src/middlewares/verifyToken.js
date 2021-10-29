import jwt from "jsonwebtoken";
import User from "../models/user.model";
import config from "../constant/config";
import message from "../constant/message";

export const verifyToken = async (req, res, next) => {
  var header = req.headers.authorization.split(" ");
  var token = header[1];

  if (!token)
    return res
      .status(403)
      .json({ status: false, message: message.NO_TOKEN_PROVIDED });

  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user)
      return res
        .status(404)
        .json({ status: false, message: message.USER_NOT_FOUND });

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ status: false, message: message.UNAUTHORIZED });
  }
};
