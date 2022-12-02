import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  user: String,
  place: String
}, {collection: 'likes'});

export default schema;