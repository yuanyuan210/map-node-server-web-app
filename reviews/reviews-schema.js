import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  placeId: String,
  userId: String,
  review: String
}, {collection: "reviews"});

export default reviewsSchema;