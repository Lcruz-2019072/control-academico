import express from "express";
import { crear, todosMat } from "../controllers/materias.controller.js";
import { logged } from "../middlewares/logged.js";
import { loggedisTeacher } from "../middlewares/loggedIsTeacher.js";
const router = express.Router();

router.post('/crearMat', [logged, loggedisTeacher], crear);
router.get('/todasMat',[logged, loggedisTeacher], todosMat);

export default router;
