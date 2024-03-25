const Professor = require('../models/Professor.js');
const Ong = require('../models/Ong.js');

/**
 * Controller function to get all professors.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing all professors or an error message.
 */
const getAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.findAll();
    res.json(professors);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching professors.' });
  }
};

/**
 * Controller function to get a professor by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the professor with the specified ID or an error message.
 */
const getProfessorById = async (req, res) => {
  const { id } = req.params;

  try {
    const professor = await Professor.findByPk(id);
    if (professor) {
      res.json(professor);
    } else {
      res.status(404).json({ error: 'Professor not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching professor.' });
  }
};

/**
 * Controller function to create a new professor.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with body parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly created professor or an error message.
 */
const createProfessor = async (req, res) => {
  const {
    name,
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
    user_id,
  } = req.body;

  try {
    const ongExists = await Ong.findByPk(ong_id);
    if (!ongExists) {
      return res.status(400).json({ error: 'Invalid ong_id. ONG not found.' });
    }

    const newProfessor = await Professor.create({
      name,
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
      user_id,
    });

    res.status(201).json(newProfessor);
  } catch (error) {
    res.status(500).json({ error: 'Error creating professor.' });
  }
};

/**
 * Controller function to update a professor by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated professor or an error message.
 */
const updateProfessor = async (req, res) => {
  const { id } = req.params;
  const {
    name,
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
    user_id,
  } = req.body;

  try {
    const professor = await Professor.findByPk(id);
    if (professor) {
      await professor.update({
        name,
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
        user_id,
      });

      res.json(professor);
    } else {
      res.status(404).json({ error: 'Professor not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating professor.' });
  }
};

/**
 * Controller function to delete a professor by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
const deleteProfessor = async (req, res) => {
  const { id } = req.params;

  try {
    const professor = await Professor.findByPk(id);
    if (professor) {
      await professor.destroy();
      res.json({ message: 'Professor deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Professor not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting professor.' });
  }
};

module.exports = {
  getAllProfessors,
  getProfessorById,
  createProfessor,
  updateProfessor,
  deleteProfessor,
};
