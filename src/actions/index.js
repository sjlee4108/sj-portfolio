// keys for actiontypes
export const ActionTypes = {
    SETKOREAN: 'SETKOREAN',
    SETENGLISH: 'SETENGLISH',
};

export function setKorean() {
    return {
        type: ActionTypes.SETKOREAN,
        payload: null,
    };
}

export function setEnglish() {
    return {
        type: ActionTypes.SETKOREAN,
        payload: null,
    };
}
