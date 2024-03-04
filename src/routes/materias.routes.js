import express from "express"
import { crear, todosMat } from "../controllers/materias.controller.js";
import { logged } from "../middlewares/logged.js";
import { loggedisTeacher } from "../middlewares/loggedIsTeacher.js";
const api = express.Router();

api.post('/crearMat', [logged, loggedisTeacher], crear);
api.get('/todasMat',[logged, loggedisTeacher], todosMat);

export default api;
