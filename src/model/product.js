import { Schema } from "mongoose";
import mongoose from "mongoose";

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
