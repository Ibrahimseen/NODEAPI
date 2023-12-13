import express  from "express";
import { deleteetask, getMytask, newtask, updatetask } from "../controllers/task.js";
import { authenticated } from "../middelawares/auth.js";

const router = express.Router();


router.post("/new",authenticated, newtask );
router.get("/my",authenticated, getMytask );

router.route("/:id").put(authenticated,updatetask ).delete(authenticated,deleteetask)



export default router;