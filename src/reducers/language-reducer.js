import { ActionTypes } from '../actions';

const LangReducer = (state = 'korean', action) => {
    switch (action.type) {
        case ActionTypes.SETKOREAN:
            return 'korean';
        case ActionTypes.SETENGLISH:
            return 'english';
        default:
            return state;
    }
};

export default LangReducer;
