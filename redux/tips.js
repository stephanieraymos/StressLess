import * as ActionTypes from './ActionTypes';

export const tips = (state = { isLoading: true,
                                     errMess: null,
                                     tips: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TIPS:
            return {...state, isLoading: false, errMess: null, tips: action.payload};

        case ActionTypes.TIPS_LOADING:
            return {...state, isLoading: true, errMess: null, tips: []}

        case ActionTypes.TIPS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};