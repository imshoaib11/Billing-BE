import dailyModel from "../Model/dailyModel.js";

const endofDay = async(req,res) =>{
    try {
       const eod = await dailyModel.findOne({date:req.body.date}) 
       if(!eod){
        await dailyModel.create(req.body)
        res.status(200).send({message:"Data Sent"})
       }
       else{
        res.status(400).send({message:"Date Already Exists"})
       }
    } 
    catch (error) {
      res.status(500).send({message:error.message})  
    }
}

const showSales = async(req,res) =>{
    try{
        const sales = await dailyModel.find({date:req.body.date})
        res.status(200).send({message:"Sales",data: sales})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
}

export default {
    endofDay,
    showSales
}