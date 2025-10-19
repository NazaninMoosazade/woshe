import mongoose, { Document, Model, Schema } from "mongoose";

// تعریف اینترفیس تایپ‌اسکریپت برای محصول
export interface IProduct extends Document {
  name: string;
  productCode: string;
  price: number;
  size: string;
  description: string;
  img: string;
  createdAt: Date;
}

// اسکیمای Mongoose
const ProductSchema: Schema<IProduct> = new mongoose.Schema({
  name: { type: String, required: true },
  productCode: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// ساخت مدل با تایپ
const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
