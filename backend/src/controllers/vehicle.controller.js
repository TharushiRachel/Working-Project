const Vehicle = require('../models/vehicles.models');

const createVehicle = async(req,res)=>{
    if(req.body){
        const vehicle = new Vehicle(req.body);
        vehicle.save()
        .then(data=>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
    }
}

const getVehicle = async(req,res)=>{
    await Vehicle.find({}).populate('vehicles','code model type name')
    .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
}

const deleteVehicle = async(req,res)=>{
    let vehicleId = req.params.id;
    await Vehicle.findByIdAndDelete(vehicleId)
    .then(()=>{
        res.status(200).send({status: "Subject Deleted"});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
      });
}


// const calculateAmount = async(req,res)=>{
//         if(req.params && req.params.id){
//             const vehicle = await Vehicle.findById(req.params.id).populate('categories','amount')
//             let totalAmount = 0;
    
//             if(vehicle.categories.length>0){
//                 vehicle.categories.map((category)=>{
//                   totalAmount += category.amount;
                   
//                 })
//             }
//             res.status(200).send({ totalAmount: totalAmount });
//         }
//     }

module.exports={
    createVehicle,
    getVehicle,
    deleteVehicle,
    //calculateAmount
}