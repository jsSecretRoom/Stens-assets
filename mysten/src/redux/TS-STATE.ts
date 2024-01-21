//-----TS-Interfase-----//

//BooleanReducer-----------------------------------------------------------------------BooleanReducer
export interface BooleanReducerState {
    closeOpenMain: boolean,
    closeOpenContacts: boolean,

}

export type BooleanAction =
| { type: 'MAIN_POP_UP_CONTROLLER'; payload: boolean }
| { type: 'CONTACTS_POP_UP_CONTROLLER'; payload: boolean }


//NumberReducer------------------------------------------------------------------------NumberReducer
export interface NumberReducerStates {
    globallCounter: number,

};

export type NumberAction =
| { type: 'FIND_GLOBAL_COUNT'; payload: number }


//StringReducer-----------------------------------------------------------------------StringReducer
export interface StringReducerStates {
    globalSearchRequest: string,
};

export type StringAction =
| { type: 'GLOBALL_SEARCH_REQUEST'; payload: string };


//CollectionReducer-------------------------------------------------------------------CollectionReducer
export interface CollectionReducerState {
    gradeCount: number[],
};

export type CollectionAction =
| { type: 'GET_GRADE_COUNT'; payload: number[] }

