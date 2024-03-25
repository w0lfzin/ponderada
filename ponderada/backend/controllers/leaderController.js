const Leader = require('../models/Leader.js');
const Ong = require('../models/Ong.js');

/**
 * Controller function to get all leaders.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing all leaders or an error message.
 */
const getAllLeaders = async (req, res) => {
  try {
    const leaders = await Leader.findAll();
    res.json(leaders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching leaders.' });
  }
};

/**
 * Controller function to get a leader by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the leader or an error message.
 */
const getLeaderById = async (req, res) => {
  const { id } = req.params;

  try {
    const leader = await Leader.findByPk(id);
    if (leader) {
      res.json(leader);
    } else {
      res.status(404).json({ error: 'Leader not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching leader.' });
  }
};

/**
 * Controller function to create a new leader.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with body parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly created leader or an error message.
 */
const createLeader = async (req, res) => {
  const { name, telephone, ong_id, user_id } = req.body;

  try {
    const ongExists = await Ong.findByPk(ong_id);
    if (!ongExists) {
      return res.status(400).json({ error: 'Invalid ong_id. ONG not found.' });
    }

    const newLeader = await Leader.create({ name, telephone, ong_id, user_id });
    res.status(201).json(newLeader);
  } catch (error) {
    res.status(500).json({ error: 'Error creating leader.' });
  }
};

/**
 * Controller function to update a leader by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the updated leader or an error message.
 */
const updateLeader = async (req, res) => {
  const { id } = req.params;
  const { name, telephone, ong_id, user_id } = req.body;

  try {
    const leader = await Leader.findByPk(id);
    if (leader) {
      await leader.update({ name, telephone, ong_id, user_id });
      res.json(leader);
    } else {
      res.status(404).json({ error: 'Leader not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating leader.' });
  }
};

/**
 * Controller function to delete a leader by ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the deletion.
 */
const deleteLeader = async (req, res) => {
  const { id } = req.params;

  try {
    const leader = await Leader.findByPk(id);
    if (leader) {
      await leader.destroy();
      res.json({ message: 'Leader deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Leader not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting leader.' });
  }
};

const getOngByLeaderId = async (req, res) => {
  const { id } = req.params;

  try {
    // Busca o líder pelo ID
    const leader = await Leader.findByPk(id);

    // Se o líder não existir, retorna um erro 404
    if (!leader) {
      return res.status(404).json({ error: 'Leader not found.' });
    }

    // Busca a ONG associada ao líder pelo ong_id
    const ong = await Ong.findByPk(leader.ong_id);

    // Se a ONG não existir, retorna um erro 404
    if (!ong) {
      return res.status(404).json({ error: 'Ong not found for this leader.' });
    }

    // Retorna as informações da ONG
    res.json(ong);
  } catch (error) {
    // Em caso de erro, retorna um erro 500
    res.status(500).json({ error: 'Error fetching ONG by leader ID.' });
  }
};

module.exports = { getAllLeaders, getLeaderById, createLeader, updateLeader, deleteLeader, getOngByLeaderId };
