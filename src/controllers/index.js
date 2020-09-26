const controller = {};

controller.ping = async (req, res) => res.json({ date: new Date() });

module.exports = controller;
