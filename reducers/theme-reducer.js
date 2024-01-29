import { ActionTypes } from '../actions';

const ThemeReducer = (state = 'light', action) => {
    switch (action.type) {
        case ActionTypes.SETDARKMODE:
            return 'dark';
        case ActionTypes.SETLIGHTMODE:
            return 'light';
        default:
            return state;
    }
};

export default ThemeReducer;
