import billingModel from '../Model/billingModel.js'
import Counter from '../Model/counterModel.js'

const newBill = async(req,res)=>{
    try{
        const counter = await Counter.findOneAndUpdate(
            { sequenceName: 'billNo' },
            { $inc: { sequenceValue: 1 } },
            { new: true, upsert: true }  // upsert: true creates the document if it doesn't exist
        );
        req.body.billNo = counter.sequenceValue
        await billingModel.create(req.body)
        res.status(200).send({message:"Bill Paid Successfully"})
    }
    catch(error){
        res.status(500).send({message:error.message || "Internal Server Error"})
    }
}

const getAllBills = async(req,res) =>{
    try{
        const bills = await billingModel.find({billDate:req.body.billDate})
        res.status(200).send({message: "Bills Fetched Successfully", data: bills})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
}
const allDateBills = async(req,res) =>{
    try {
        const allBills = await billingModel.find()
        res.status(200).send({message:"All Bills",data: allBills})
    } 
    catch (error) {
        res.status(500).send({message:error.message})
    }
}

export default {
    newBill,
    getAllBills,
    allDateBills
}