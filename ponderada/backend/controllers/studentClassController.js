const StudentClass = require('../models/StudentsClasses.js');
const Student = require('../models/Student.js');
const Class = require('../models/Class.js');

/**
 * Retrieves all students belonging to a specific class.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response containing students or error message.
 */
const getStudentsByClassId = async (req, res) => {
  const { class_id } = req.params;

  try {
    if (!class_id) {
      return res.status(400).json({ error: 'Class ID is required' });
    }

    // Find all StudentClass entries with the specified class_id
    const studentClassIds = await StudentClass.findAll({
      where: { class_id },
      attributes: ['student_id'],
    });

    // Extract student_ids from the retrieved StudentClass entries
    const studentIds = studentClassIds.map(studentClass => studentClass.student_id);

    // Find all students with the extracted student_ids
    const students = await Student.findAll({
      where: { id: studentIds },
    });

    // Respond with the retrieved students
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * Retrieves all student classes.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response containing student classes or error message.
 */
const getAllStudentClasses = async (req, res) => {
  try {
    // Find all student classes
    const studentClasses = await StudentClass.findAll();
    // Respond with the retrieved student classes
    res.json(studentClasses);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Error fetching student classes.' });
  }
};

/**
 * Retrieves a student class by its ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response containing student class or error message.
 */
const getStudentClassById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find a student class by its ID
    const studentClass = await StudentClass.findByPk(id);
    if (studentClass) {
      // Respond with the retrieved student class
      res.json(studentClass);
    } else {
      // Handle case where student class is not found
      res.status(404).json({ error: 'Student class not found.' });
    }
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Error fetching student class.' });
  }
};

/**
 * Creates a new student class.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response containing the newly created student class or error message.
 */
const createStudentClass = async (req, res) => {
  const { student_id, class_id } = req.body;

  try {
    // Check if both student_id and class_id exist in the request body
    if (!student_id || !class_id) {
      return res.status(400).json({
        error: 'Invalid student_id or class_id. Both student and class IDs are required.',
      });
    }

    // Check if the referenced student and class exist
    const studentExists = await Student.findByPk(student_id);
    const classExists = await Class.findByPk(class_id);
    if (!studentExists || !classExists) {
      return res.status(400).json({
        error: 'Invalid student_id or class_id. Student or Class not found.',
      });
    }

    // Create a new student class entry
    const newStudentClass = await StudentClass.create({
      student_id,
      class_id,
    });

    // Respond with the newly created student class
    res.status(201).json(newStudentClass);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Error creating student class.' });
  }
};

/**
 * Updates an existing student class.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response containing the updated student class or error message.
 */
const updateStudentClass = async (req, res) => {
  const { id } = req.params;
  const { student_id, class_id } = req.body;

  try {
    // Find the student class by its ID
    const studentClass = await StudentClass.findByPk(id);
    if (studentClass) {
      // Check if both student_id and class_id exist in the request body
      if (!student_id || !class_id) {
        return res.status(400).json({
          error: 'Invalid student_id or class_id. Both student and class IDs are required.',
        });
      }

      // Check if the referenced student and class exist
      const studentExists = await Student.findByPk(student_id);
      const classExists = await Class.findByPk(class_id);
      if (!studentExists || !classExists) {
        return res.status(400).json({
          error: 'Invalid student_id or class_id. Student or Class not found.',
        });
      }

      // Update the student class entry
      await studentClass.update({
        student_id,
        class_id,
      });

      // Respond with the updated student class
      res.json(studentClass);
    } else {
      // Handle case where student class is not found
      res.status(404).json({ error: 'Student class not found.' });
    }
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Error updating student class.' });
  }
};

/**
 * Deletes a student class by its ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response containing success message or error message.
 */
const deleteStudentClass = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the student class by its ID
    const studentClass = await StudentClass.findByPk(id);
    if (studentClass) {
      // Delete the student class entry
      await studentClass.destroy();
      // Respond with success message
      res.json({ message: 'Student class deleted successfully.' });
    } else {
      // Handle case where student class is not found
      res.status(404).json({ error: 'Student class not found.' });
    }
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Error deleting student class.' });
  }
};

module.exports = {
  getAllStudentClasses,
  getStudentClassById,
  createStudentClass,
  updateStudentClass,
  deleteStudentClass,
  getStudentsByClassId,
};
