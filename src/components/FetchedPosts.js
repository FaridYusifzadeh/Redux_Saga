import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post.js';
import { fetchPosts } from '../redux/actions';

export default ({ posts }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts.fetchedPosts;
  });
  if (!posts.length) {
    return (
      <button onClick={() => dispatch(fetchPosts)} className='btn btn-primary'>
        Download
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post} />); // send map item // Post component
};
