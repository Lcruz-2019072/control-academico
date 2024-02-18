import jwt from 'jsonwebtoken';
import 'dotenv/config';
import User from '../models/usuario.model.js';

export const logged = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({ message: 'No autorizado' });
    }
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(uid);
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'El token no funciona o expiro' });
  }
};
