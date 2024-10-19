const mongoose=require('mongoose');

const hotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    distance:{
        type:Number,
        required:true
    },
    images:{
        type:[String],
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        max:5,
        min:1
    },
    rooms:{
        type:[String], 
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }
})

const Hotel=mongoose.model('hotel',hotelSchema);
module.exports=Hotel;