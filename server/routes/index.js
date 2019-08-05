const vehiclesController = require('../controllers').vehicle;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the vehicles!',
    }));

    app.post('/api/vehicles', vehiclesController.create);
    app.get('/api/vehicles', vehiclesController.list);
    app.get('/api/vehicles/any', vehiclesController.findAnyString);
    app.delete('/api/vehicles', vehiclesController.deleteAll);
    app.put('/api/vehicles/:vehicleId', vehiclesController.updateQuery);
};