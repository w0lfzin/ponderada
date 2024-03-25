const StudentsPresencesClasses = require('../models/StudentsPresencesClasses.js');

/**
 * Controller function to get all student presences classes.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing all student presences classes or an error message.
 */
const getAllStudentsPresencesClasses = async (req, res) => {
  try {
    const studentsPresencesClasses = await StudentsPresencesClasses.findAll();
    res.json(studentsPresencesClasses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching student presences classes.' });
  }
};

/**
 * Controller function to get a student presence class by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the student presence class with the specified ID or an error message.
 */
const getStudentsPresencesClassesById = async (req, res) => {
  const { id } = req.params;

  try {
    const studentsPresencesClass = await StudentsPresencesClasses.findByPk(id);
    if (studentsPresencesClass) {
      res.json(studentsPresencesClass);
    } else {
      res.status(404).json({ error: 'Students presences class not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students presences class.' });
  }
};

/**
 * Controller function to create a new student presence class.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with body parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly created student presence class or an error message.
 */
const createStudentsPresencesClasses = async (req, res) => {
  const { student_id, instance_class_id } = req.body;

  try {
    const newStudentsPresencesClass = await StudentsPresencesClasses.create({
      student_id,
      instance_class_id,
    });

    res.status(201).json(newStudentsPresencesClass);
  } catch (error) {
    res.status(500).json({ error: 'Error creating student presences class.' });
  }
};

/**
 * Controller function to update a student presence class by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated student presence class or an error message.
 */
const updateStudentsPresencesClasses = async (req, res) => {
  const { id } = req.params;
  const { student_id, instance_class_id } = req.body;

  try {
    const studentsPresencesClass = await StudentsPresencesClasses.findByPk(id);
    if (studentsPresencesClass) {
      await studentsPresencesClass.update({
        student_id,
        instance_class_id,
      });

      res.json(studentsPresencesClass);
    } else {
      res.status(404).json({ error: 'Students presences class not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating student presences class.' });
  }
};

/**
 * Controller function to delete a student presence class by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
const deleteStudentsPresencesClasses = async (req, res) => {
  const { id } = req.params;

  try {
    const studentsPresencesClass = await StudentsPresencesClasses.findByPk(id);
    if (studentsPresencesClass) {
      await studentsPresencesClass.destroy();
      res.json({ message: 'Students presences class deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Students presences class not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting students presences class.' });
  }
};

module.exports = {
  getAllStudentsPresencesClasses,
  getStudentsPresencesClassesById,
  createStudentsPresencesClasses,
  updateStudentsPresencesClasses,
  deleteStudentsPresencesClasses,
};
