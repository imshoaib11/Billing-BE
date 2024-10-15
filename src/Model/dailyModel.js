import mongoose from './index.js';

const dailySchema = new mongoose.Schema({
    date:{
        type: String,
        unique: true
    },
    totalSales:{
        type: Number
    },
    totalGpay:{
        type: Number
    },
    totalCash:{
        type: Number
    },
    expense:{
        type: Number
    },
    bundle:{
        type: Number
    },
    user:{
        type: String,
        required:[true,'User is required']
    },
    Notes:{
        type: String,
        required: [true,'Notes is required']
    }
},
    {
        collection:"Daily",
        versionKey:false
    })

    const dailyModel = mongoose.model('Daily',dailySchema)

    export default dailyModel