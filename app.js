import express from 'express'
import cors from 'cors'
import UsersController from "./users/users-controller.js";
import LikesController from "./likes/likes-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/map';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());

UsersController(app);
LikesController(app);

app.listen(process.env.PORT || 4000);