const GF = require('../models/Gf.js');

/**
 * Controller function to get all GFs (General Functions).
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing all GFs or an error message.
 */
const getAllGFs = async (req, res) => {
  try {
    const gfs = await GF.findAll();
    res.json(gfs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching GFs.' });
  }
};

/**
 * Controller function to get a GF by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the GF or an error message.
 */
const getGFById = async (req, res) => {
  const { id } = req.params;

  try {
    const gf = await GF.findByPk(id);
    if (gf) {
      res.json(gf);
    } else {
      res.status(404).json({ error: 'GF not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching GF.' });
  }
};

/**
 * Controller function to create a new GF.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with body parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly created GF or an error message.
 */
const createGF = async (req, res) => {
  const { name, userId } = req.body;

  try {
    const newGF = await GF.create({ name, userId });
    res.status(201).json(newGF);
  } catch (error) {
    res.status(500).json({ error: 'Error creating GF.' });
  }
};

/**
 * Controller function to update a GF by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated GF or an error message.
 */
const updateGF = async (req, res) => {
  const { id } = req.params;
  const { name, userId } = req.body;

  try {
    const gf = await GF.findByPk(id);
    if (gf) {
      await gf.update({ name, userId });
      res.json(gf);
    } else {
      res.status(404).json({ error: 'GF not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating GF.' });
  }
};

/**
 * Controller function to delete a GF by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
const deleteGF = async (req, res) => {
  const { id } = req.params;

  try {
    const gf = await GF.findByPk(id);
    if (gf) {
      await gf.destroy();
      res.json({ message: 'GF deleted successfully.' });
    } else {
      res.status(404).json({ error: 'GF not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting GF.' });
  }
};

module.exports = {
  getAllGFs,
  getGFById,
  createGF,
  updateGF,
  deleteGF,
};
