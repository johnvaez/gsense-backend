import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/gsense",
  PORT: process.env.PORT || 4000,
  SECRET: "F37*R3P05170R10"
};
