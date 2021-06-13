const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    trip_type:{type:String, required:true, trim:true},
    duration:{type:Number, required:true},
    amount:{type:Number, required:true},
    vehicles:[{type: mongoose.Schema.Types.ObjectId,required: false, ref:'vehicles'}]
});

const Category = mongoose.model('categories', CategorySchema);
module.exports=Category;