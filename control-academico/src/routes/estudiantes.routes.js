import { registrar, asignar, miscursos } from "../controllers/estudiantes.controller";
import { limitCourses } from "../middlewares/limitCourses";
import { logged } from "../middlewares/logged";
const router = express.Router();

router.post('/registrarEst', registrar);
router.post('/asignar/materias', [logged, limitCourses], asignar);
router.get('/miscursos', logged, miscursos);

export default router;
