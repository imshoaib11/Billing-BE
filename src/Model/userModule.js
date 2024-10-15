import { validateEmail } from "../common/validations.js";
import mongoose from "./index.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required']
    },
    email: {
        type: String,
        required:  [true,'Email is required'],
        unique: true,
        validate: {
            validator: validateEmail,
            message: props=> `${props.value} is not a valid email`
        }
    },
    password:{
        type: String,
        required: [true,'Password is required'],
        // minlength: 8
    },
    role:{
        type: String,
        default: 'User'
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    profile:{
        type: String,
        default: null
    },
    resetToken:{
        type: String,
        default: null
    }
    
},
   {
    collection: 'Users',
    versionKey: false
   })

   const userModel = mongoose.model('Users', userSchema);

   export default userModel;
