const vehiclesController = require('../controllers').vehicle;
const obj = {body:{
    "plate": "1234123",
    "note": "angar",
    "type": "Avion"
}}
exports.create = function (){
    const status =  function  (){
        return
    }
    const send =  function  (){
        return
    }
    vehiclesController.create(obj, {status, send})
}
this.create()