import React from 'react';
import { connect } from 'react-redux';
import Post from './Post.js';

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className='text-center'>No posts</p>;
  }
  return syncPosts.map((post) => <Post post={post} key={post.id} />); // send map item // Post component
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    syncPosts: state.posts.posts,
  };
};
export default connect(mapStateToProps, null)(Posts);
