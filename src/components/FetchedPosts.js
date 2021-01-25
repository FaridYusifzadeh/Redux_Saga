import React from 'react';
import Post from './Post.js';

export default ({ posts }) => {
  if (!posts.length) {
    return <button className='btn btn-primary'>Download</button>;
  }
  return posts.map((post) => <Post post={post} key={post} />); // send map item // Post component
};
