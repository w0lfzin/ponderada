const Ong = require('../models/Ong.js');

/**
 * Controller function to get all NGOs (Organizações Não Governamentais).
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing all NGOs or an error message.
 */
const getAllOngs = async (req, res) => {
  try {
    const ongs = await Ong.findAll();
    res.json(ongs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching NGOs.' });
  }
};

/**
 * Controller function to get an NGO by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the NGO or an error message.
 */
const getOngById = async (req, res) => {
  const { id } = req.params;

  try {
    const ong = await Ong.findByPk(id);
    if (ong) {
      res.json(ong);
    } else {
      res.status(404).json({ error: 'NGO not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching NGO.' });
  }
};

/**
 * Controller function to create a new NGO.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with body parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly created NGO or an error message.
 */
const createOng = async (req, res) => {
  const { name, email, cnpj, telephone, foundationData, address } = req.body;

  try {
    const newOng = await Ong.create({
      name,
      email,
      cnpj,
      telephone,
      foundationData,
      address,
    });

    res.status(201).json(newOng);
  } catch (error) {
    res.status(500).json({ error: 'Error creating NGO.' });
  }
};

/**
 * Controller function to update an NGO by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated NGO or an error message.
 */
const updateOng = async (req, res) => {
  const { id } = req.params;
  const { name, email, cnpj, telephone, foundationData, address } = req.body;

  try {
    const ong = await Ong.findByPk(id);
    if (ong) {
      await ong.update({
        name,
        email,
        cnpj,
        telephone,
        foundationData,
        address,
      });

      res.json(ong);
    } else {
      res.status(404).json({ error: 'NGO not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating NGO.' });
  }
};

/**
 * Controller function to delete an NGO by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
const deleteOng = async (req, res) => {
  const { id } = req.params;

  try {
    const ong = await Ong.findByPk(id);
    if (ong) {
      await ong.destroy();
      res.json({ message: 'NGO deleted successfully.' });
    } else {
      res.status(404).json({ error: 'NGO not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting NGO.' });
  }
};

module.exports = { getAllOngs, getOngById, createOng, updateOng, deleteOng };
