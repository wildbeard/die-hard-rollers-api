const UserModel = require('../models/User');

exports.route = (app) => {

    app.get('/users', (req, res) => {
        const data = {
            first_name: 'Press',
            last_name: 'Haddock',
            username: 'wildbeard',
            email: 'press@wildbeard.app',
            password: '123',
            permission_level: 0,
        }
        UserModel.create(data)
            .then(result => {
                console.log(result);
                res.json(result);
            });
    });

    app.get('/users/:username', (req, res) => {
        UserModel.findByUsername(req.params.username)
            .then((result) => {
                res.json(result);
            });
    });

}