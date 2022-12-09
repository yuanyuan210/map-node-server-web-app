import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  place: {xid: String, name: String, kinds: String, point: {lat: Number, lon: Number}},
  user: {_id: String, username: String},
}, {collection: 'likes'});

export default schema;