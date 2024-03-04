import express from "express"
import { actualizar, perfil, logear, eliminar } from "../controllers/usuarios.controller.js";
import { logged } from "../middlewares/logged.js";


const api = express.Router();

api.get('/perfilUsu', logged, perfil);
api.put('/actualizarUsu', logged, actualizar);
api.post('/iniciar', logear);
api.delete('/eliminarUsu', logged, eliminar);

export default api;
