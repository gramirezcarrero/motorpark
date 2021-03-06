const Vehicles = require('../models');
const Sequialize = require('sequelize');
const $ = Sequialize.Op;
module.exports = {
  create(req, res) {
    console.log(req.req, 'aqui')
    return Vehicles.Vehicles
      .create({
        plate: req.body.plate,
        note: req.body.note,
        type: req.body.type,
        status: req.body.status
      })
      .then(vehicle => res.status(201).send(vehicle))
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      });
  },
  list(req, res) {
    Vehicles.Vehicles.findAll()
      .then(vehicles => res.status(200).send({
        success: 'true',
        message: 'vehicles retrieved successfully',
        vehicles,
      }));
  },
  findAnyString(req, res) {
    let where = {}
    if (req.query) {
      let sentence = {}
      Object.keys(req.query).map((e) => sentence[e] = { [$.iLike]: `%${req.query[e]}%` })
      where = { where: sentence }
    }
    Vehicles.Vehicles.findAll(
      where
    )
      .then(vehicles => res.status(200).send({
        success: 'true',
        message: 'vehicles retrieved successfully',
        vehicles,
      }));
  },
  deleteAll(req, res) {
    Vehicles.Vehicles.findAll().then(vehicles => {
      vehicles.map((vehicle) => {
        vehicle.destroy()
          .catch(error => res.status(400).send(error));
      })
    }).then((vehicles) => res.status(204).send()
    )
  }, 
  updateQuery(req, res) {
    return Vehicles.Vehicles
    .findByPk(req.params.vehicleId)
    .then(vehicle => {
      if (!vehicle) {
        return res.status(404).send({
          message: 'vehicle Not Found',
        });
      }
      return vehicle
        .update({
          status: req.body.status || vehicle.status,
        })
        .then(() => res.status(200).send(vehicle))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  }


};