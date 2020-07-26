import React from "react";

export type Comment = {
  id: number;
  content: string;
  status: string;
};

type CommentList = {
  comments: Comment[];
};

export default ({ comments }: CommentList) => {
  const renderedComments = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
