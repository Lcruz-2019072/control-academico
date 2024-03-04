import express from "express"
import { actualizarMat, asignarMat, buscarMat, eliminarMat, registrarPro } from "../controllers/maestros.controller.js";
import { logged } from "../middlewares/logged.js";
import { loggedisTeacher } from "../middlewares/loggedIsTeacher.js";



const api = express.Router();


api.put('/actualizarProfe/materia/:course',[logged, loggedisTeacher], actualizarMat );
api.get('/mismaterias', [logged, loggedisTeacher], buscarMat);
api.post('/registrar', [logged, loggedisTeacher], registrarPro);
api.delete('/eliminar/materia/:course',[logged, loggedisTeacher], eliminarMat);
api.post('/asignar/materia', [logged, loggedisTeacher], asignarMat);

export default api;
