const InstanceClasses = require('../models/InstancesClasses.js');
const Classes = require('../models/Class.js');

/**
 * Controller function to get all instances of classes.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing instances of classes or an error message.
 */
const getAllInstanceClasses = async (req, res) => {
  try {
    const instanceClasses = await InstanceClasses.findAll();
    res.json(instanceClasses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching instances of classes.' });
  }
};

/**
 * Controller function to get an instance of classes by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the instance of classes or an error message.
 */
const getInstanceClassesById = async (req, res) => {
  const { id } = req.params;

  try {
    const instanceClasses = await InstanceClasses.findByPk(id);
    if (instanceClasses) {
      res.json(instanceClasses);
    } else {
      res.status(404).json({ error: 'Instance of classes not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching instance of classes.' });
  }
};

/**
 * Controller function to create a new instance of classes.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with body parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly created instance of classes or an error message.
 */
const createInstanceClasses = async (req, res) => {
  const { id_classes, date, observation, status } = req.body;

  try {
    const classesExists = await Classes.findByPk(id_classes);
    if (!classesExists) {
      return res.status(400).json({ error: 'Invalid id_classes. Classes not found.' });
    }

    const newInstanceClasses = await InstanceClasses.create({
      id_classes,
      date,
      observation,
      status,
    });

    res.status(201).json(newInstanceClasses);
  } catch (error) {
    res.status(500).json({ error: 'Error creating instance of classes.' });
  }
};

/**
 * Controller function to update an instance of classes by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated instance of classes or an error message.
 */
const updateInstanceClasses = async (req, res) => {
  const { id } = req.params;
  const { id_classes, date, observation, status } = req.body;

  try {
    const instanceClasses = await InstanceClasses.findByPk(id);
    if (instanceClasses) {
      await instanceClasses.update({
        id_classes,
        date,
        observation,
        status,
      });

      res.json(instanceClasses);
    } else {
      res.status(404).json({ error: 'Instance of classes not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating instance of classes.' });
  }
};

/**
 * Controller function to delete an instance of classes by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
const deleteInstanceClasses = async (req, res) => {
  const { id } = req.params;

  try {
    const instanceClasses = await InstanceClasses.findByPk(id);
    if (instanceClasses) {
      await instanceClasses.destroy();
      res.json({ message: 'Instance of classes deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Instance of classes not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting instance of classes.' });
  }
};

module.exports = {
  getAllInstanceClasses,
  getInstanceClassesById,
  createInstanceClasses,
  updateInstanceClasses,
  deleteInstanceClasses,
};
