import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";

import config from "./constant/config";
import endPoint from "./constant/endpoint";

import authController from "./controllers/auth.controller";
import userController from "./controllers/user.controller";

const app = express();

// Settings
app.set("port", config.PORT);

// Middlewares
var jsonParser = bodyParser.json({
  limit: 1024 * 1024 * 10,
  type: "application/json",
});
var urlencodedParser = bodyParser.urlencoded({
  extended: true,
  limit: 1024 * 1024 * 10,
  type: "application/x-www-form-urlencoded",
});
app.use(jsonParser);
app.use(urlencodedParser);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(endPoint.PREFIX, authController);
app.use(endPoint.PREFIX, userController);

export default app;
