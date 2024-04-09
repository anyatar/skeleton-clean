import { Router } from "express";
import xxxController from "../controllers/xxx.controller";
import { welcome } from "../controllers/home.controller";

const router = Router();
const controller = new xxontroller();

router.get("/", welcome);

// Signs the user up to the application
router.post("/xxx", controller.xx);
export default router;
