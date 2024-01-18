import { BooleanReducerState, BooleanAction } from "../TS-STATE";

const initialState: BooleanReducerState = {
  closeOpenMain: false,
};

export function BooleanReducer(
  
  state: BooleanReducerState = initialState, 
  action: BooleanAction) : BooleanReducerState {

  switch (action.type) {
    case 'MAIN_POP_UP_CONTROLLER':
      return {
        ...state,
        closeOpenMain: action.payload,
      };
    default:
      return state;
  }
}