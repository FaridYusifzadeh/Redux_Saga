import React from 'react';
import PostForm from './components/PostForm.js';
import Post from './components/Post.js';
import Posts from './components/Posts.js';
import FetchedPosts from './components/FetchedPosts.js';
const App = () => {
  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
        <div className='row'>
          <div className='col'>
            <h2>synchronous posts</h2>
            <Posts />
          </div>
          <div className='col'>
            <h2>Asynchronous Posts</h2>
            <FetchedPosts posts={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
