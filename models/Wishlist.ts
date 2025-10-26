import mongoose from "mongoose";
import "./User";    // اطمینان از اینکه مدل User قبلاً تعریف شده
import "./Product"; // اطمینان از اینکه مدل Product قبلاً تعریف شده

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true, // createdAt و updatedAt خودکار اضافه می‌شوند
  }
);

// جلوگیری از دوباره تعریف شدن مدل
const Wishlist = mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
