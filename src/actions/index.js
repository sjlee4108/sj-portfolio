// keys for actiontypes
export const ActionTypes = {
    SETKOREAN: 'SETKOREAN',
    SETENGLISH: 'SETENGLISH',
    SETDARKMODE: 'SETDARK',
    SETLIGHTMODE: 'SETLIGHT',
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

export function setDark() {
    return {
        type: ActionTypes.SETDARKMODE,
        payload: null,
    };
}

export function setLight() {
    return {
        type: ActionTypes.SETLIGHTMODE,
        payload: null,
    };
}
