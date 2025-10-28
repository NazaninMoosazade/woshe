import mongoose, { Schema, Document, Model } from "mongoose";
import "./Product";

export interface IComment extends Document {
  username: string;
  body: string;
  email: string;
  score?: number;
  isAccept?: boolean;
  date?: Date;
  productID?: mongoose.Types.ObjectId;
}

const CommentSchema = new Schema<IComment>({
  username: { type: String, required: true },
  body: { type: String, required: true },
  email: { type: String, required: true },
  score: { type: Number, default: 5 },
  isAccept: { type: Boolean, default: false },
  date: { type: Date, default: () => Date.now(), immutable: false },
  productID: { type: mongoose.Types.ObjectId, ref: "Product" },
});

const CommentModel: Model<IComment> =
  mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);

export default CommentModel;
