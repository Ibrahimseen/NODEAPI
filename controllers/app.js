import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendcookies } from "../utils/feauters.js";
import ErrorHandler from "../middelawares/err.js";



export  const login = async(req,res,next) => {
    try {
        const {email,password} = req.body;
         const user = await User.findOne({ email }).select("+password");

         if (!user) return next(new ErrorHandler ("Invalid Email or Password", 400));

        const isMatch = await bcrypt.compare(password, user.password);
        
        if(!isMatch) return next(new ErrorHandler ("Invalid Email or Password", 400));

        sendcookies(user,res,`Welcome Back, ${user.name}`,200);
    } catch (error) {
     next(error)   
    }
};


export const register = async(req,res,next)=>{
    try {
        const {name,email,password} = req.body;
        let user = await User.findOne({email})
        
        if (user) return next(new ErrorHandler ("user already exist", 40));
    
    
         const hashpassword = await bcrypt.hash(password,10)
         user = await User.create({name,email,password:hashpassword,});
        
         sendcookies(res,user,"Registered Succesfully",201);     
    } catch (error) {
        next(error)
    }
}; 


export  const getMYprofile = (req,res)=>{
       try {
        res.status(200).json({
            success:true,
            user :req.user,
        })
       } catch (error) {
        next(error)
       }
   
};

export  const logout = (req,res)=>{
    try {
        res.status(200).
        cookie("token","",{expire: new Date(Date.now()),
            sameSite:process.env.NODE_ENV === "Development" ? "lax": "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        })
        .json({
            success:true,
            user :req.user,
        })
    } catch (error) {
        next(error)
    }
   
};








       

