const Controller = require('../controllers/CharacterController');

exports.route = (app) => {

    app.get('/characters', Controller.list);

    app.get('/characters/:id', Controller.show);

    app.get('/characters/:id/rolls', Controller.rolls);

}