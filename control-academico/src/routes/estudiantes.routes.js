import express from "express";

import { registrar, asignar, miscursos } from "../controllers/estudiantes.controller.js";
import { limitCourses } from "../middlewares/limitCourses.js";
import { logged } from "../middlewares/logged.js";
const router = express.Router();

router.post('/registrarEst', registrar);
router.post('/asignar/materias', [logged, limitCourses], asignar);
router.get('/miscursos', logged, miscursos);

export default router;
