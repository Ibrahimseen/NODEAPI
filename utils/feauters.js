import Jwt  from "jsonwebtoken";

export const sendcookies = (user,res,message,statuscode=200,) => {


    const token = Jwt.sign({_id:user._id},process.env.JWT_SECRET);
    
    console.log(process.env)
    console.log(process.env.NODE_ENV === "Development" );

    res
    .status(statuscode)
    .cookie("token", token,{
        httpOnly:true,
        maxAge : 15 * 60 * 1000,
        sameSite:process.env.NODE_ENV === "Development" ? "lax": "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
    success:true,
    message,
    });
}