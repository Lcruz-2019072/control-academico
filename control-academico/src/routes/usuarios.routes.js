import { actualizar, perfil, logear, eliminar } from "../controllers/usuarios.controller";
import { logged } from "../middlewares/logged";


const router = express.Router();

router.get('/perfilUsu', logged, perfil);
router.put('/actualizarUsu', logged, actualizar);
router.post('/iniciar', logear);
router.delete('/eliminarUsu', logged, eliminar);

export default router;