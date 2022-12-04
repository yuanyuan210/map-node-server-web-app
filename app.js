import express from 'express'
import cors from 'cors'
import UsersController from "./users/users-controller.js";
import LikesController from "./likes/likes-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/map';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

console.log(CONNECTION_STRING);

mongoose.connect(CONNECTION_STRING, options);

const app = express();
app.use(cors());
app.use(express.json());
//app.use(session({}));

UsersController(app);
LikesController(app);
ReviewsController(app);

app.listen(process.env.PORT || 4000);