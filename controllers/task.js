import ErrorHandler from "../middelawares/err.js";
import { Task } from "../models/tasks.js";


export const newtask = async(req,res,next) => {
   try {
    const { title , description } = req.body;

    await Task.create({
        title,
        description,
        user: req.user,
    });
    res.status(201).json({
        success : "true",
        message : "Task added Succesduly"
    });
    
   } catch (error) {
    next(error)
   }

};
export const getMytask = async(req,res,next) => {
 
const userid = req.user._id ;

try {
    const tasks = await Task.find({user:userid});

res.status(200).json({
    success:true,
    tasks,
});
} catch (error) {
    next(error)
}

};

export const  updatetask = async(req,res,next) => {

    try {
        const task = await Task.findById(req.params.id);
if (!task) return next(new Error("Invalid ID"))
task.iscompleted = !task.iscompleted 
await task.save();


res.status(200).json({
    success:true,
    message:"task updated succesfully"
});
        
    } catch (error) {
        next(error)
    }

};

export const  deleteetask = async(req,res,next) => {
    try {
        const task = await Task.findById(req.params.id);
    
        if (!task) return next(new ErrorHandler("Task Not Found", 404));
        await task.deleteOne();
    
        res.status(200).json({
        success:true,
        message:"task Deleted",
    });     
    } catch (error) {
        next(error)
    }
};





    

   
 
    