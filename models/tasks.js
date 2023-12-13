import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type : String,
        require:true,
    },

    description: {
        type : String,
        unique : true,
        require:true,
    },
    iscompleted :{
        type :Boolean,
        default :false,
    },
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "users",
        require:true,

    },
    createAT:{
        type :Date,
        default : Date.now,
    }
});

export const Task = mongoose.model("Task",schema)
