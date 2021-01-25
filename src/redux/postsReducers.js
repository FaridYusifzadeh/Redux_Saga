import { CREATE_POST } from './types';

const initialState = {
  posts: [],
  fetchedPosts: [],
};
export const postsReducer = (state = initialState, action) => {
  // if state === nul default state = initialState
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat([action.payload]) };

    default:
      return state;
  }
};
