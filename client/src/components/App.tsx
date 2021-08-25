import React from 'react';
import Layout from './Layout';
import PostForm from './PostForm';
import PostList from './PostList';

const App = () => {
  return (
    <Layout>
      <PostForm />
      <PostList />
    </Layout>
  );
};

export default App;
