const dotenv=require('dotenv').config({path:"./config.env"});
const app=require('./app');
const port=process.env.PORT
const server=app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})