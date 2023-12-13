import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"BackendApi"
    }).then(()=>console.log("Databas Connected"))
    .catch((e)=>console.log(e));
};
