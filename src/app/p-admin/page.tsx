

import React from "react";
import ClockWithUser from "@/components/modules/p-admin/ClockWithUser";
import SalesChart from "@/components/modules/p-admin/SalesChart";
import Box from "@/components/tamplates/p-admin/Box/Box";
import CommentModel from "@/models/Comment";
import Product from "@/models/Product";
import User from "@/models/User";
import connectToDB from "@/configs/mongodb";


async function Page() {
  await connectToDB();

  const comment = await CommentModel.find({}).lean();
  const product = await Product.find({}).lean();
  const user = await User.find({}).lean();

  return (
    <div className=" bg-gray-100 p-6 flex flex-col items-center gap-6">
      <ClockWithUser />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-x-2 lg:gap-x-5 items-center">
        <Box title="مجموع کاربران" value={user.length} color="#dc2626" />
        <Box title="مجموع محصولات" value={product.length} color="#f97316"/>
        <Box title="مجموع کامنت ها" value={comment.length} color="#facc15" /> 
      </div>
      <SalesChart />
    </div>
  );
}

export default Page;
