import { Schema } from "mongoose";
import mongoose from "mongoose";

const bookSchema = new Schema(
  {
    bookName: { type: String, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("books", bookSchema);
