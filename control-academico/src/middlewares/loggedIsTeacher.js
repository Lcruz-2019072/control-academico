export const loggedisTeacher = async (req, res, next) => {
  try {
    const { user } = req;

    if (user.role !== 'TEACHER') {
      return res
        .status(401)
        .json({ message: 'No eres un profesor' });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
