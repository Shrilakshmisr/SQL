const Expense = require('../models/expense');

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.findAll();
  res.json(expenses);
};

exports.addExpense = async (req, res) => {
  const { amount, description, category } = req.body;
  const expense = await Expense.create({ amount, description, category });
  res.status(201).json(expense);
};

exports.deleteExpense = async (req, res) => {
  const id = req.params.id;
  await Expense.destroy({ where: { id } });
  res.status(204).send();
};

exports.updateExpense = async (req, res) => {
  const { amount, description, category } = req.body;
  const id = req.params.id;
  await Expense.update({ amount, description, category }, { where: { id } });
  const updated = await Expense.findByPk(id);
  res.json(updated);
};
