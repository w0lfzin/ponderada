const Responsable = require('../models/Responsable.js');
const Ong = require('../models/Ong.js');

/**
 * Controller function to get all responsables.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing all responsables or an error message.
 */
const getAllResponsables = async (req, res) => {
  try {
    const responsables = await Responsable.findAll();
    res.json(responsables);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching responsables.' });
  }
};

/**
 * Controller function to get a responsable by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the responsable with the specified ID or an error message.
 */
const getResponsableById = async (req, res) => {
  const { id } = req.params;

  try {
    const responsable = await Responsable.findByPk(id);
    if (responsable) {
      res.json(responsable);
    } else {
      res.status(404).json({ error: 'Responsable not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching responsable.' });
  }
};

/**
 * Controller function to create a new responsable.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with body parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly created responsable or an error message.
 */
const createResponsable = async (req, res) => {
  const {
    name,
    email,
    gender,
    civil_state,
    race,
    birthday,
    rg,
    cpf,
    telephone,
    state,
    city,
    address,
    ong_id,
  } = req.body;

  try {
    const ongExists = await Ong.findByPk(ong_id);
    if (!ongExists) {
      return res.status(400).json({ error: 'Invalid ong_id. ONG not found.' });
    }

    const newResponsable = await Responsable.create({
      name,
      email,
      gender,
      civil_state,
      race,
      birthday,
      rg,
      cpf,
      telephone,
      state,
      city,
      address,
      ong_id,
    });

    res.status(201).json(newResponsable);
  } catch (error) {
    res.status(500).json({ error: 'Error creating responsable.' });
  }
};

/**
 * Controller function to update a responsable by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated responsable or an error message.
 */
const updateResponsable = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    gender,
    civil_state,
    race,
    birthday,
    rg,
    cpf,
    telephone,
    state,
    city,
    address,
    ong_id,
  } = req.body;

  try {
    const responsable = await Responsable.findByPk(id);
    if (responsable) {
      await responsable.update({
        name,
        email,
        gender,
        civil_state,
        race,
        birthday,
        rg,
        cpf,
        telephone,
        state,
        city,
        address,
        ong_id,
      });

      res.json(responsable);
    } else {
      res.status(404).json({ error: 'Responsable not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating responsable.' });
  }
};

/**
 * Controller function to delete a responsable by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
const deleteResponsable = async (req, res) => {
  const { id } = req.params;

  try {
    const responsable = await Responsable.findByPk(id);
    if (responsable) {
      await responsable.destroy();
      res.json({ message: 'Responsable deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Responsable not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting responsable.' });
  }
};

module.exports = {
  getAllResponsables,
  getResponsableById,
  createResponsable,
  updateResponsable,
  deleteResponsable,
};
