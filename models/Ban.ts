import mongoose, { Document, Model, Schema } from "mongoose";

// تعریف اینترفیس برای مدل Ban
export interface IBan extends Document {
  phone?: string;
  email?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BanSchema: Schema<IBan> = new Schema(
  {
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const BanModel: Model<IBan> = mongoose.models.Ban || mongoose.model<IBan>("Ban", BanSchema);

export default BanModel;
