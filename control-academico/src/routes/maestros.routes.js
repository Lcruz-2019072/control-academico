import { actualizarMat, asignarMat, buscarMat, eliminarMat, registrarPro } from "../controllers/maestros.controller.js";
import { logged } from "../middlewares/logged.js";
import { loggedisTeacher } from "../middlewares/loggedIsTeacher.js";



const router = express.Router();


router.put('/actualizarProfe/materia/:course',[logged, loggedisTeacher], actualizarMat );
router.get('/mismaterias', [logged, loggedisTeacher], buscarMat);
router.post('/registrar', [logged, loggedisTeacher], registrarPro);
router.delete('/eliminar/materia/:course',[logged, loggedisTeacher], eliminarMat);
router.post('/asignar/materia', [logged, loggedisTeacher], asignarMat);

export default router;
