const empServices = require('../services/empServices');

exports.getAllEmployees = async (req, res) => {
  const data = await empServices.fetchAll();
  res.json(data);
};

exports.createEmployee = async (req, res) => {
  try {
    const emp = await empServices.create(req.body);
    res.status(201).json(emp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
