import React from "react";
import DataTableComments from "@/components/tamplates/p-admin/DataTableComments/DataTableComments";
import connectToDB from "@/configs/mongodb";
import CommentModel from "@/models/Comment";

const page = async () => {
  await connectToDB();

  const comments = await CommentModel.find({}).lean();


  return (
    <>
    {
      comments.length === 0 ? (
        <h1>در حال حاضر کامنتی وجود ندارد</h1>
      ) : (
      <DataTableComments comments={JSON.parse(JSON.stringify(comments))} title="لیست کامنت ها"/>
      )
    }

    </>
  );
};

export default page;
