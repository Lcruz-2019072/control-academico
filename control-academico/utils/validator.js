import encriptacion from 'encriptacion';

export const hashPassword = async (password) => {
  let salt = await encriptacion.genSalt(10);

  return await encriptacion.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
  return await encriptacion.compare(password, hashedPassword);
};
