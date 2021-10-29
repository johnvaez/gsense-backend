import { Router } from "express";
const router = Router();

import endPoint from "../constant/endpoint";
import * as serviceUser from "../services/user.service";

router.post(endPoint.USER, serviceUser.createUser);

export default router;
