import User from "../models/user.model";
import message from "../constant/message";

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);

    const isEmailExist = await User.findOne({ email: user.email });
    if (isEmailExist) {
      return res
        .status(400)
        .json({ status: false, message: message.IS_EMAIL_EXIST });
    }

    user.password = await User.encryptPassword(user.password);
    await user.save();

    return res.status(200).json({ status: true, message: message.SUCCESS });
  } catch (error) {
    return res.status(500).json(error);
  }
};
