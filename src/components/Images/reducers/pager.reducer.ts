import { PagerTypes } from '../enums';
import { PagerActions, PagerState } from '../types';

export const pageReducer = (state: PagerState, action: PagerActions) => {
  switch (action.type) {
    case PagerTypes.AdvancePage:
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};
