const Student = require('../models/Student.js');
const Ong = require('../models/Ong.js');
const Responsable = require('../models/Responsable.js');

/**
 * Controller function to get all students.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing all students or an error message.
 */
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students.' });
  }
};

/**
 * Controller function to get a student by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the student with the specified ID or an error message.
 */
const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching student.' });
  }
};

/**
 * Controller function to create a new student.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with body parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly created student or an error message.
 */
const createStudent = async (req, res) => {
  const {
    name,
    email,
    gender,
    race,
    birthday,
    rg,
    cpf,
    telephone,
    state,
    city,
    address,
    ong_id,
    civil_state,
    status,
    responsable_id,
  } = req.body;

  try {

    const ongExists = await Ong.findByPk(ong_id);
    if (!ongExists) {
      return res.status(400).json({ error: 'Invalid ong_id. ONG not found.' });
    }

    const responsableExists = await Responsable.findByPk(responsable_id);
    if (responsable_id && !responsableExists) {
      return res.status(400).json({ error: 'Invalid responsable_id. Responsable not found.' });
    }

    const newStudent = await Student.create({
      name,
      email,
      gender,
      race,
      birthday,
      rg,
      cpf,
      telephone,
      state,
      city,
      address,
      ong_id,
      civil_state,
      status,
      responsable_id,
    });

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Error creating student.' });
  }
};

/**
 * Controller function to update a student by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated student or an error message.
 */
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    gender,
    race,
    birthday,
    rg,
    cpf,
    telephone,
    state,
    city,
    address,
    ong_id,
    civil_state,
    status,
    responsable_id,
  } = req.body;

  try {
    const student = await Student.findByPk(id);
    if (student) {
      await student.update({
        name,
        email,
        gender,
        race,
        birthday,
        rg,
        cpf,
        telephone,
        state,
        city,
        address,
        ong_id,
        civil_state,
        status,
        responsable_id,
      });

      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating student.' });
  }
};

/**
 * Controller function to delete a student by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);
    if (student) {
      await student.destroy();
      res.json({ message: 'Student deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Student not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting student.' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
