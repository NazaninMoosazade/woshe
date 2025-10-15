import mongoose, { Document, Schema, model, models } from "mongoose";


export interface IUser extends Document {
  name: string;
  email?: string;
  phone: string;
  password?: string;
  role: string;
  refreshToken?: string;
}


const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  password: { type: String },
  role: { type: String, default: "USER" },
  refreshToken: { type: String },
});


const User = models.User || model<IUser>("User", UserSchema);

export default User;
