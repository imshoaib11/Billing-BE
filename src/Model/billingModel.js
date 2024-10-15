import mongoose from './index.js'

const billingSchema = new mongoose.Schema({
    billNo:{
        type: Number,
        required: [true,'Bill No is required'],
        unique: true,
        default: 0
    },
    billDate:{
        type: String
    },
    billTime:{
        type: String
    },
    gpay:{
        type: Number,
        required: [true,"GPAY Amount is required"],
        default: 0
    },
    cash:{
        type: Number,
        required: [true,"CASH Amount is required"],
        default: 0
    },
    totalAmount:{
        type: Number,
        required: [true,"Total Amount is required"],
        default:0
    }
},
    {
        collection:'Bills',
        versionKey: false
    })

    const billingModel = mongoose.model('Bills',billingSchema)

    export default billingModel;