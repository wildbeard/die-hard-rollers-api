const mongoose = require('../mongoose').mongoose;
const Schema = mongoose.Schema;

const rollSchema = new Schema({
    game_id: mongoose.SchemaTypes.ObjectId,
    character: { type: Schema.Types.ObjectId, ref: 'Character' },
    die: Array,
    roll: Array,
});

const Roll = mongoose.model('Roll', rollSchema);

exports.create = (data) => {
    const roll = new Roll(data);
    roll.save();
    return roll;
};

exports.findByCharacter = async (characterId) => {
    return await Roll.find({ character_id: characterId });
}

exports.all = async () => {
    const rolls = await Roll.find().populate('character');
    return rolls;
}