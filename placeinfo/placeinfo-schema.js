import mongoose from "mongoose";

const placeinfoSchema = new mongoose.Schema({
      place: {xid: String, name: String},
      manager: {_id: String, username: String},
      hours: {
        sun: {open: Number, close: Number},
        mon: {open: Number, close: Number},
        tue: {open: Number, close: Number},
        wed: {open: Number, close: Number},
        thu: {open: Number, close: Number},
        fri: {open: Number, close: Number},
        sat: {open: Number, close: Number},
      },
      notification: String
    },
    {collection: "placeinfo"}
)

export default placeinfoSchema;