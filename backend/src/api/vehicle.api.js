const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicle.controller');
const Vehicle = require('../models/vehicles.models');


module.exports = function(){
    router.post('/create', controller.createVehicle);
    router.get('/', controller.getVehicle);
    router.delete('/delete/:id', controller.deleteVehicle);
    //router.get('/amount/:id', controller.calculateAmount)
    return router;
}


router.route("/update/:id").put(async (req,res)=>{
    let vehicleId = req.params.id;
    const {code, model, type, name} = req.body;

    const updateVehicle={
        code,
        model,
        type,
        name
    }

    const update = await Vehicle.findByIdAndUpdate(vehicleId, updateVehicle)
    .then(data=>{
        res.status(200).send({data:data});
       })
       .catch(error=>{
        res.status(500).send({status:"Error" , error: error.message});
       });
})

// module.exports = router;