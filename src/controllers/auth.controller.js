import { Router } from "express";
const router = Router();

import endPoint from "../constant/endpoint";
import * as serviceAuth from "../services/auth.service";

router.post(endPoint.AUTH, serviceAuth.signin);

export default router;
