import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {data} from '../../constants/JournalsData';
import {getTime, getTodaysDate} from '../../utils/date-utils';
import {ADD_JOURNALS, UPDATE_JOURNAL} from '../actions/type';

const initialState = {
  journals: data,
};

const journalReducerConfig = {
  key: 'journals',
  storage: AsyncStorage,
};
export const getJournals = (state) => {
  return state.journals.journals;
};

function journalsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_JOURNALS: {
      const journals = state.journals;
      journals.push(action.payload);
      return {
        ...state,
        journals: journals,
      };
    }
    case UPDATE_JOURNAL: {
      const updatedJournal = action.payload;
      return {
        ...state,
        journals: state.journals.map((journal, i) =>
          journal.id === updatedJournal.id
            ? {
                ...state.journals,
                content: updatedJournal.content,
                time: getTime(),
                date: getTodaysDate(),
              }
            : journal,
        ),
      };
    }
    default:
      return state;
  }
}
export default persistReducer(journalReducerConfig, journalsReducer);
