import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  place: {xid: String, name: String},
  user: {_id: String, username: String},
}, {collection: 'likes'});

export default schema;