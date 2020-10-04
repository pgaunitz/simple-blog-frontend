import React from 'react';

import ArticlesList from '../components/ArticleList';
import articleContent from './article-content';

const ArticleListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
  </>
);

export default ArticleListPage;
