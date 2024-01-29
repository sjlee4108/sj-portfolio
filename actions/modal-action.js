import { ActionTypes } from './types';

export function setModalOpen(index) {
    return {
        type: ActionTypes.SETMODALOPEN,
        payload: index,
    };
}

export function setModalClose() {
    return {
        type: ActionTypes.SETMODALCLOSE,
        payload: null,
    };
}
