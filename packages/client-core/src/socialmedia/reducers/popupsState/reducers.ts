/**
 * @author Tanya Vykliuk <tanya.vykliuk@gmail.com>
 */
import { CHANGE_CREATOR_PAGE_STATE } from '../actions';
import Immutable from 'immutable';
import { PopupsActions } from './actions';

export const initialFeedState = {
  popups: {
    creatorPage: false,
    creatorForm: false,
    creatorId: null,
    feedPage: false,
    shareFeedPage: false,
  },
};

const immutableState = Immutable.fromJS(initialFeedState);

const popupsStateReducer = (state = immutableState, action: PopupsActions): any => {
  switch (action.type) {
    case CHANGE_CREATOR_PAGE_STATE : return state.set('creatorPage', (action as PopupsActions).state).set('creatorId', (action as PopupsActions).id);
  }
  return state;
};

export default popupsStateReducer;
