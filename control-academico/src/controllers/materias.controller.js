import express from 'express';
import Course from '../models/materias.model.js';
import User from '../models/usuario.model.js';
import { isTeacher } from '../middlewares/loggedIsTeacher.js';
import { isLoggedIn } from '../middlewares/logged.js';

export const crear = async (req, res) => {
    try {
      const { name, description, teacher } = req.body;
  
      const course = new Course({
        name,
        description,
        teacher: await User.findOne({ username: teacher }).select('_id'),
      });
  
      const courses = await Course.find({});
  
      if (!course.teacher) {
        return res.status(404).json({ message: 'Teacher not found' });
      }
  
      let courseAlreadyExists = courses.some((course) => course.name === name);
  
      if (courseAlreadyExists) {
        return res.status(400).json({ message: 'Course already exists' });
      }
  
      // Save the course to the teacher
      const teacherAddCourse = await User.findOne({ username: teacher });
  
      teacherAddCourse.courses.push(course._id);
  
      await teacherAddCourse.save();
      await course.save();
  
      return res.json({ message: 'Course created' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

export const todosMat = async (req, res) => {
    try {
      const courses = await Course.find({}).populate({
        path: 'teacher',
        model: 'User',
        select: 'name lastName -_id',
      }).populate({
        path: 'students',
        model: 'User',
        select: 'name lastName -_id',
      
      });
  
      return res.json(courses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }