import { CREATE_POST } from './types.js';
export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}
