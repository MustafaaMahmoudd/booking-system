const Hotel=require('../models/Hotel')

exports.createHotel=async(req,res,next)=>{
    try{

        const hotel=await Hotel.create(req.body)
        res.status(201).json({
            status:'success',
            data:{
                hotel
            }
        })
    }catch(err){
        return next(err);
    }
}

exports.getAll=async(req,res,next)=>{
    try{

        const hotels=await Hotel.find();
        res.status(200).json({
            status:'success',
            data:{
                hotels
            }
        })
    }catch(err){
        return next(err)
    }
}

exports.getOne=async(req,res,next)=>{
    try{

        const hotel=await Hotel.findById(req.params.id);
        res.status(200).json({
            status:'success',
            data:{
                hotel
            }
        })
    }catch(err){
        return next(err)
    }
}

exports.deleteOne=async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status:'success',
            message:"The hotel deleted successfully"
        })
    }catch(err){
        return next(err)
    }
}

exports.updateOne=async(req,res,next)=>{
    const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        status:'success',
        message:"the hotel updated successfully",
        data:{
            updatedHotel
        }
    })
}