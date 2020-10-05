import axios from 'axios';
import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [userName, setUserName] = useState('');
  const [commentText, setCommenttext] = useState('');

  const addComment = async () => {
    const result = await axios.post(
      `/api/articles/${articleName}/add-comment`,
      {
        userName,
        text: commentText,
      }
    );
    const body = await result.data;

    setArticleInfo(body);
    setUserName('');
    setCommenttext('');
  };

  return (
    <div id="add-comment-form">
      <h3>Add Comment</h3>
      <label>
        Name:
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows="4"
          cols="50"
          value={commentText}
          onChange={(event) => setCommenttext(event.target.value)}
        />
      </label>

      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
