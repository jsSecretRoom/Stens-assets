import { BooleanReducerState, BooleanAction } from "../TS-STATE";

const initialState: BooleanReducerState = {
  closeOpenMain: false,
  closeOpenContacts: false,

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
    default:
      return state;
  }
}