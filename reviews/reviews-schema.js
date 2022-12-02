import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  place: String,
  user: String,
  content: String
}, {collection: "reviews"});

export default reviewsSchema;