const Category = require('../models/category.model');

const createCategory = async(req,res)=>{
    if(req.body){
        const category = new Category(req.body);
        category.save()
        .then(data=>{
            res.status(200).send({data:data});
        })
        .catch(error=>{
            res.status(500).send({error: error.message});
        });
    }
}

const getCategory = async(req,res)=>{
    await Category.find({}).populate('categories','trip_type duration amount')
    .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
}

const getVehicleForCategory = async(req,res)=>{
    if(req.params && req.params.id){
        await Category.findById(req.params.id)
        .populate('vehicles', 'code model type name')
        .then(data=>{
            res.status(200).send({vehicles: data.vehicles});
           })
           .catch(error=>{
            res.status(500).send({error: error.message});
           })
    }
}

const calculateAmount = async(req,res)=>{
    if(req.params && req.params.id){
        const category = await Category.findById(req.params.id)
        let totalAmount = 0;

        totalAmount = category.duration*category.amount;
        res.status(200).send({ totalAmount: totalAmount });
        
    }
}

//total amount for set of categories
const calculateTotalAmountForSerOfCategorie = async(req,res)=>{
    const categories = await Category.find()
    let total=0;
    if(categories.length > 0){
        categories.map((category) =>{
            total += category.amount;
        });
        console.log(total);
    }
    res.status(200).send({total: total});
}



module.exports={
    createCategory,
    getCategory,
    getVehicleForCategory,
   calculateAmount,
   calculateTotalAmountForSerOfCategorie
};