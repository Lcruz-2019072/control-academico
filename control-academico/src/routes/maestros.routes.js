import { actualizarMat, asignarMat, buscarMat, eliminarMat, registrarPro } from "../controllers/maestros.controller";
import { logged } from "../middlewares/logged";
import { loggedisTeacher } from "../middlewares/loggedIsTeacher";



const router = express.Router();


router.put('/actualizarProfe/materia/:course',[logged, loggedisTeacher], actualizarMat );
router.get('/mismaterias', [logged, loggedisTeacher], buscarMat);
router.post('/registrar', [logged, loggedisTeacher], registrarPro);
router.delete('/eliminar/materia/:course',[logged, loggedisTeacher], eliminarMat);
router.post('/asignar/materia', [logged, loggedisTeacher], asignarMat);

export default router;
