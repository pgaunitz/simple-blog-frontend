import React from 'react';
import axios from 'axios';

const UpvotesSection = ({articleName, upvotes, setArticleInfo}) => {
  const upvoteArticle = async () => {
    const result = await axios.post(`/api/articles/${articleName}/upvote`);
    const body = await result.data;
    setArticleInfo(body);
  };

  return (
    <div>
      <button onClick={() => upvoteArticle()}>Add Upvote</button>
      <p>This line has been upvoted {upvotes} times</p>
    </div>
  );
};

export default UpvotesSection;
