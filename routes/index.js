const UserRouter = require('./user');
const RollRouter = require('./roll');
const CharacterController = require('./character');

exports.route = (app) => {
    UserRouter.route(app);
    RollRouter.route(app);
    CharacterController.route(app);
}