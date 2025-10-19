import mongoose, { Document, Model, Schema } from "mongoose";

// تعریف اینترفیس TypeScript
export interface IContact extends Document {
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

// ساخت Schema
const contactSchema: Schema<IContact> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, "ایمیل نامعتبر است"],
    },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true } // اضافه کردن createdAt و updatedAt
);

// جلوگیری از ایجاد دوباره مدل در hot reload
const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
