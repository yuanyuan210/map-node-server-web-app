import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  place: {xid: String, name: String},
  user: {_id: String, username: String},
  content: String,
  reply: {
    manager: {_id: String, username: String},
    content: String
  }
}, {collection: "reviews"});

export default reviewsSchema;