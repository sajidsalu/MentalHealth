import {ADD_JOURNALS, UPDATE_JOURNAL} from './type';

export function addJournal(journal) {
  return {
    type: ADD_JOURNALS,
    payload: journal,
  };
}

export function updateJournal(journal) {
  return {
    type: UPDATE_JOURNAL,
    payload: journal,
  };
}
