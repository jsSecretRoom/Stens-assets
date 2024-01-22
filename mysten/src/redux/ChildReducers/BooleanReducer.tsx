import { BooleanReducerState, BooleanAction } from "../TS-STATE";

const initialState: BooleanReducerState = {
  closeOpenMain: false,
  closeOpenContacts: false,
  closeOpenJoinUs: false,

};


export function BooleanReducer(
  
  state: BooleanReducerState = initialState, 
  action: BooleanAction) : BooleanReducerState {

  switch (action.type) {

    case 'CONTACTS_POP_UP_CONTROLLER':
    return {
      ...state,
      closeOpenContacts: action.payload,
    };

    case 'MAIN_POP_UP_CONTROLLER':
    return {
      ...state,
      closeOpenMain: action.payload,
    };

    case 'JOIN_US_POP_UP_CONTROLLER':
    return {
      ...state,
      closeOpenJoinUs: action.payload,
    };

    default:
    return state;
  }
}