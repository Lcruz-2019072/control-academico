import express from "express"
import { registrar, asignar, miscursos } from "../controllers/estudiantes.controller.js";
import { limitCourses } from "../middlewares/limitCourses.js";
import { logged } from "../middlewares/logged.js";
const api = express.Router();

api.post('/registrarEst', registrar);
api.post('/asignar/materias', [logged, limitCourses], asignar);
api.get('/miscursos', logged, miscursos);

export default api;
