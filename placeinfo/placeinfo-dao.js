import placeinfoModel from "./placeinfo-model.js";

export const createPlaceinfo = (placeinfo) => placeinfoModel.create(placeinfo);

export const updatePlaceinfo = (piid, placeinfo) => placeinfoModel.updateOne({_id: piid},
    {$set: placeinfo})

export const deletePlaceinfo = (piid) => placeinfoModel.deleteOne({_id: piid});

export const findPlaceinfoByPlace = (xid) => placeinfoModel.findOne({"place.xid": xid});

export const findPlaceinfoByManager = (uid) => placeinfoModel.find({"manager._id": uid});

