import React from "react";
import DataTableUsers from "@/components/templates/p-admin/DataTableUsers/DataTableUsers";
import User from "@/models/User";
import connectToDB from "@/configs/mongodb";

const page = async () => {
  await connectToDB();
  const users = await User.find({}).lean();

  return (
    <main>
      {users.length === 0 ? (
        <h1>کاربری وجود ندارد</h1>
      ) : (
        <DataTableUsers
          users={JSON.parse(JSON.stringify(users))}
          title="لیست کاربران"
        />
      )}
    </main>
  );
};

export default page;
