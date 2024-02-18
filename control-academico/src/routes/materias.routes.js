import { crear, todosMat } from "../controllers/materias.controller";
import { logged } from "../middlewares/logged";
import { loggedisTeacher } from "../middlewares/loggedIsTeacher";
const router = express.Router();

router.post('/crearMat', [logged, loggedisTeacher], crear);
router.get('/todasMat',[logged, loggedisTeacher], todosMat);

export default router;
