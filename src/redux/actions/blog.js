import {ADD_BLOGS} from './type';

export function saveBlog(journal) {
  return {
    type: ADD_BLOGS,
    payload: journal,
  };
}
