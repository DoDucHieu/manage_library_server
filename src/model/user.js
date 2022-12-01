import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    certificatedId: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
