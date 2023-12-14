import { Schema } from "mongoose";

export default new Schema({
  address: { type: String, default: '' },
  owner: { type: Schema.Types.ObjectId, ref: "users", required: true },
  lon: { type: Number, required: true },
  lat: { type: Number, required: true },
  area: { type: Number },
  pictures: [
    { type: Schema.Types.ObjectId, ref: "images", required: true }
  ]
});
