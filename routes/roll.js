const Controller = require('../controllers/RollController');

exports.route = (app) => {

    app.get('/rolls', Controller.list);

    app.get('/rolls/:character_id', Controller.characterRolls);

}