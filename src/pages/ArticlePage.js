import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList'

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    
    const fetchData = async () => {
      const result = await axios.get(`/api/articles/${name}`);
      setArticleInfo(result.data);
    };
    fetchData();
    
  }, [name]);

  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>Article {articleInfo.title}</h1>
      <p>This line has been upvoted {articleInfo.upvotes} times</p>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments}/>
      <h3>Other articles:</h3>
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
