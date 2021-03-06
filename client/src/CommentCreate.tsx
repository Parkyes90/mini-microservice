import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
type CommentCreate = {
  postId: number;
};

export default ({ postId }: CommentCreate) => {
  const [content, setContent] = useState("");
  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label> New Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
