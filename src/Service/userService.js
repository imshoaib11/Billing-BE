import userModel from "../Model/userModule.js";
import auth from "../common/auth.js"
import nodemailer from "nodemailer"

const getUsers = async(req,res) => {
    try{
        let users = await userModel.find({},{password:0});

    res.status(200).send({message: "Users Fetched successfully", data: users});
    }
    catch(error){
        res.status(500).send({error: error.message || "Internal Server Error"});
    }
    
}

const createUser = async (req, res) => {
    try{
        let user = await userModel.findOne({email: req.body.email})
      
        if(!user){
            req.body.password = await auth.hashedPassword(req.body.password)
            await userModel.create(req.body)
            res.status(200).send({message: "User created successfully"})
        } 
        else
            res.status(401).send({message: `${req.body.email} already exists`})
    }
    catch(error){
        res.status(500).send({error: error.message || "Internal Server Error"});
    }
}

const loginUser = async (req, res) => {
    try{
        let user = await userModel.findOne({email: req.body.email})
        
        if(user){
            if(await auth.hashCompare(req.body.password, user.password)){
                let payload = {
                    id: user._id,
                    userName : user.name,
                    email: user.email,
                    role: user.role,
                    img: user.profile,
                }
                let token = await auth.createToken(payload)
                // console.log(token)
                res.status(200).send({message: "Login Successfull",token,role:user.role,userName: user.name,
                                                                    email:user.email, img:user.profile})
            }
            else{
                res.status(404).send({message: "Incorrect Password"})
            }
        }
        else{
            res.status(404).send({message: "User not found"})
        }
    }
    catch(error){
        res.status(500).send({error: error.message || "Internal Server Error"});
    }
}



export default {
    getUsers,
    createUser,
    loginUser
}