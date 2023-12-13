import {app} from "./app.js"
import {connectDB} from "./data/databs.js"


connectDB();
// console.log(process.env.PORT)

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is working on ${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
});

