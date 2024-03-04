export const limitCourses = (req, res, next) => {
  let { courses } = req.user;

  if (courses.length >= 3) {
    return res
      .status(400)
      .json({
        message: 'No puedes estar en más de 3 clases a la vez, comunicate con tu coordinador ',
      });
  }

  next();
};
