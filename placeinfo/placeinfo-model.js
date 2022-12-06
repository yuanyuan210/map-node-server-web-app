import mongoose from "mongoose";
import placeinfoSchema from "./placeinfo-schema.js";

const placeinfoModel = mongoose.model("PlaceinfoModel", placeinfoSchema);

export default placeinfoModel;