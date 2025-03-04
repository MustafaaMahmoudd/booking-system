const sendDev=(err,res)=>{
    res.status(err.statusCode).json({
     status:err.status,
     message:err.message,
     error:err,
     stack:err.stack
    })
}




module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.status=err.status || "fail";
    if(process.env.NODE_ENVIRONMENT==='development')
        sendDev(err,res);
}