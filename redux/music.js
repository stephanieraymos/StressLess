import * as ActionTypes from './ActionTypes';

export const music = (state = { isLoading: true,
                                     errMess: null,
                                     music: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MUSIC:
            return {...state, isLoading: false, errMess: null, music: action.payload};

        case ActionTypes.MUSIC_LOADING:
            return {...state, isLoading: true, errMess: null, tips: []}

        case ActionTypes.MUSIC_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};