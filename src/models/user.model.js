import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import schema from "../constant/schema";
import message from "../constant/message";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, message.REQUIRED],
  },
  phone: {
    type: String,
    required: [true, message.REQUIRED],
  },
  email: {
    type: String,
    required: [true, message.REQUIRED],
  },
  password: {
    type: String,
  },
});

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model(schema.USER, userSchema);
