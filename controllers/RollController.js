const Roll = require('../models/Roll');

exports.list = async (request, response) => {
    const rolls = await Roll.all();
    return response.json(rolls);
}

exports.userRolls = (request, response) => {

}

exports.characterRolls = async (request, response) => {
    const character_id = request.params.character_id;
    const rolls = await Roll.findByCharacter(character_id);
    return response.json(rolls)
}

exports.create = (request, response) => {
    const character_id = request.query.character_id;
    const data = {
        character_id: character_id,
        die: [ 'd6' ],
        roll: [ 4 ],
    };
    const roll = Roll.create(data);
    return response.json(roll);
}