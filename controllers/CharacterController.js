const Character = require('../models/Character');

exports.list = (req, res) => {

}

exports.show = async (req, res) => {
    const id = req.params.id;
    const char = await Character.findById(id);
    return res.json(char);
}

exports.rolls = async (req, res) => {
    const id = req.params.id;
    const rolls = await Character.getCharacterRolls(id);
    return res.json(rolls);
}

exports.createRoll = async (req, res) => {

}