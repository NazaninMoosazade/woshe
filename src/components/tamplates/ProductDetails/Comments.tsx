

'use client';

import React, { useState } from "react";
import Comment from "@/components/modules/comment/Comment";
import CommentForm, { CommentType } from "./CommentForm";

interface CommentsProps {
  comments: CommentType[];
  productID: string;
}

function Comments({ comments: initialComments, productID }: CommentsProps) {
  const [comments, setComments] = useState(initialComments);

  const handleNewComment = (comment: CommentType) => {
    setComments([comment, ...comments]); 
  };

  return (
    <>
      <CommentForm productID={productID} onNewComment={handleNewComment} />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
        {comments.map((comment) => (
          <Comment key={comment._id} {...comment} />
        ))}
      </div>
    </>
  );
}

export default Comments;
