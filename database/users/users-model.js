import  mongoose from "mongoose";
import  usersSchema from "./users-schema";


const usersModel = mongoose.model("UserModel", usersSchema)
export default usersModel