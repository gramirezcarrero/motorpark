const Vehicles = require('../models');
const Sequialize = require('sequelize');
const $ = Sequialize.Op;
module.exports = {
  create(req, res) {
    return Vehicles.Vehicles
      .create({
        plate: req.body.plate,
        note: req.body.note,
        type: req.body.type,
      })
      .then(vehicle => res.status(201).send(vehicle))
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      });
  },
  list(req, res) {
    Vehicles.Vehicles.findAll()
      .then(todos => res.status(200).send({
        success: 'true',
        message: 'vehicles retrieved successfully',
        todos,
      }));
  },
  findAny(req, res) {
    console.log(req.query)
    Vehicles.Vehicles.findAll({
      where: {
        type: { [$.iLike]: `%${req.query.type}%` }
      }
    })
      .then(todos => res.status(200).send({
        success: 'true',
        message: 'vehicles retrieved successfully',
        todos,
      }));

  }


};