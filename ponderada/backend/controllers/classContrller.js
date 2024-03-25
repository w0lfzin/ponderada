const Class = require('../models/Class.js');

/**
 * Controller function to get all classes.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing all classes or an error message.
 */
const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching classes.' });
  }
};

/**
 * Controller function to get a class by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the class or an error message.
 */
const getClassById = async (req, res) => {
  const { id } = req.params;

  try {
    const classInstance = await Class.findByPk(id);
    if (classInstance) {
      res.json(classInstance);
    } else {
      res.status(404).json({ error: 'Class not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching class.' });
  }
};

/**
 * Controller function to create a new class.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with body parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly created class or an error message.
 */
const createClass = async (req, res) => {
  const { local, workshop, status, category, ong_id } = req.body;

  try {
    const newClass = await Class.create({
      local,
      workshop,
      status,
      category,
      ong_id,
    });

    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Error creating class.' });
  }
};

/**
 * Controller function to update a class by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated class or an error message.
 */
const updateClass = async (req, res) => {
  const { id } = req.params;
  const { local, workshop, status, category, ong_id } = req.body;

  try {
    const classInstance = await Class.findByPk(id);
    if (classInstance) {
      await classInstance.update({
        local,
        workshop,
        status,
        category,
        ong_id,
      });

      res.json(classInstance);
    } else {
      res.status(404).json({ error: 'Class not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating class.' });
  }
};

/**
 * Controller function to delete a class by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
const deleteClass = async (req, res) => {
  const { id } = req.params;

  try {
    const classInstance = await Class.findByPk(id);
    if (classInstance) {
      await classInstance.destroy();
      res.json({ message: 'Class deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Class not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting class.' });
  }
};

module.exports = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
};
