import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: String,
    firstname: String,
    lastname: String,
    location: String,
    bio: String,
    role: {type: String, enum: ['Admin', 'Manager', 'Visitor'], required: true}
}, {collection: "users"})

export default usersSchema;