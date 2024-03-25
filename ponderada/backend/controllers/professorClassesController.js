const ProfessorsClasses = require('../models/ProfessorClasses.js');
const Professor = require('../models/Professor.js');
const InstanceClasses = require('../models/InstancesClasses.js');

/**
 * Controller function to get all professors in an instance of classes.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing professors in the instance of classes or an error message.
 */
const getProfessorsInInstanceClasses = async (req, res) => {
  const { instance_classes_id } = req.params;

  try {
    const professorsInInstanceClasses = await ProfessorsClasses.findAll({
      where: { instance_classes_id },
      include: [
        {
          model: Professor,
          attributes: ['id', 'name', 'telephone', 'ong_id'],
        },
      ],
    });

    res.json(professorsInInstanceClasses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching professors in the instance of classes.' });
  }
};

/**
 * Controller function to add a professor to an instance of classes.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters and body.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the newly added professor instance or an error message.
 */
const addProfessorToInstanceClasses = async (req, res) => {
  const { professor_id } = req.body;
  const { instance_classes_id } = req.params;

  try {
    const professorExists = await Professor.findByPk(professor_id);
    const instanceClassesExists = await InstanceClasses.findByPk(instance_classes_id);

    if (!professorExists || !instanceClassesExists) {
      return res.status(400).json({
        error: 'Invalid professor_id or instance_classes_id. Professor or InstanceClasses not found.',
      });
    }

    const newProfessorInstance = await ProfessorsClasses.create({
      professor_id,
      instance_classes_id,
    });

    res.status(201).json(newProfessorInstance);
  } catch (error) {
    res.status(500).json({ error: 'Error adding professor to the instance of classes.' });
  }
};

/**
 * Controller function to remove a professor from an instance of classes.
 *
 * @function
 * @async
 * @param {Object} req - Express request object with parameters.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success or failure of the removal.
 */
const removeProfessorFromInstanceClasses = async (req, res) => {
  const { id } = req.params;

  try {
    const professorInstance = await ProfessorsClasses.findByPk(id);
    if (professorInstance) {
      await professorInstance.destroy();
      res.json({ message: 'Professor removed from the instance of classes successfully.' });
    } else {
      res.status(404).json({ error: 'Professor not found in the instance of classes.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error removing professor from the instance of classes.' });
  }
};

module.exports = {
  getProfessorsInInstanceClasses,
  addProfessorToInstanceClasses,
  removeProfessorFromInstanceClasses,
};
