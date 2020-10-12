const mongoose = require('../mongoose').mongoose;
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    game_id: Schema.Types.ObjectId,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    first_name: String,
    last_name: String,
    class: String,
    status: String,
}, {
    toJSON: {
        virtuals: true,
    }
});

// Our Reverse Populate
characterSchema.virtual('rolls', {
    ref: 'Roll',
    localField: '_id',
    foreignField: 'character',
    justOne: false,
})

const Character = mongoose.model('Character', characterSchema);

exports.findById = (id) => {
    return Character.findById(id)
        .populate('rolls');
}

exports.getCharacterRolls = async (characterId) => {
    const char = await Character.findById(characterId).populate('rolls');
    return char.rolls;
};