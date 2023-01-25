import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import ArticleDetailPage from './views/articleDetailPage';

import Article from './views/articlePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Article />} />
      {/* <Route path="/article-details/:id" element={<ArticleDetailPage />} /> */}
    </Routes>
  );
}

export default App;
