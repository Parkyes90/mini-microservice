import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

type CommentList = {
  postId: number;
};

type Comment = {
  id: number;
  content: string;
};

export default ({ postId }: CommentList) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const fetchData = useCallback(async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  }, [postId]);

  useEffect(() => {
    fetchData().then();
  }, [fetchData]);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
