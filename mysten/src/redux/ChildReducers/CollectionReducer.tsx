import { CollectionReducerState, CollectionAction } from "../TS-STATE";

const initialState: CollectionReducerState = {
  gradeCount: [],

};
 
export function CollectionReducer(

  state: CollectionReducerState = initialState, 
  action: CollectionAction ) : CollectionReducerState {
    
  switch (action.type) {
    case 'GET_GRADE_COUNT':
      return {
        ...state,
        gradeCount: action.payload,
      };
    default:
      return state;
  }
}