import { Schema } from "mongoose";

export default new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  owner: { type: Schema.Types.ObjectId, ref: "users", required: true },
  manufacturer: { type: String },
  pictures: [
    { type: Schema.Types.ObjectId, ref: "images", required: true }
  ]
});
