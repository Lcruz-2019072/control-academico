import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { hashPassword } from './utils/validator.js';
import User from './src/models/usuario.model.js';
import connection from './configs/mongo.js';
import rutaProfesor from './src/routes/maestros.routes.js';
import rutaUsuario from './src/routes/usuarios.routes.js';
import rutaEstudiante from './src/routes/estudiantes.routes.js';
import rutaMateria from './src/routes/materias.routes.js';



const app = express();
const port = process.env.PORT || 3056;


app.use('/estudiante', rutaEstudiante);
app.use('/materia', rutaMateria);
app.use('/profesor', rutaProfesor);
app.use('/usuario', rutaUsuario);


app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, async () => {
  await connection();

  const admin = await User({
    name: 'Armas',
      lastName: 'Chang',
        username: 'Papaarmas',
          password: await hashPassword('12345'),
            courses: [],
              role: 'TEACHER',
  });

  const users = await User.find({});
  if (users.length === 0) {
    await admin.save();
  }


  console.log(`Server running at port ${port}`);
});
