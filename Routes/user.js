import express from "express";

import 
{
register
,login
,getMYprofile
,logout
} 
from "../controllers/app.js";
import { authenticated } from "../middelawares/auth.js";

const router = express.Router();


router.post("/new", register);

router.post("/login", login);

router.get("/me",authenticated,getMYprofile);

router.post("/logout", logout);


export default router;