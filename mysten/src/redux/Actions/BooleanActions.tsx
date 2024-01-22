//BooleanReducer-------------------------------------------------------------------------
export const GetMainPortallState = (togle: boolean) => ({
    type: 'MAIN_POP_UP_CONTROLLER',
    payload: togle,
});

export const GetContactsPortallState = (togle: boolean) => ({
    type: 'CONTACTS_POP_UP_CONTROLLER',
    payload: togle,
});

export const JoinUsPortallState = (togle: boolean) => ({
    type: 'JOIN_US_POP_UP_CONTROLLER',
    payload: togle,
});