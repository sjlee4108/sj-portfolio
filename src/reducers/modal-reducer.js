import { ActionTypes } from '../actions';

const ModalReducer = (state = { isOpen: false, index: -1 }, action) => {
    switch (action.type) {
        case ActionTypes.SETMODALOPEN:
            return { isOpen: true, index: action.payload };
        case ActionTypes.SETMODALCLOSE:
            return { isOpen: false, index: -1 };
        default:
            return state;
    }
};

export default ModalReducer;
