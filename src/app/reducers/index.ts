import {
  Action,
  createAction,
  createReducer,
  on
} from '@ngrx/store';

export interface MappyState {
  searchOptions:string[],
  searchKey:string,
  searchResult: string
}

export function selectSearchOptions(state: MappyState) {
  return state.searchOptions;
}

export const initialState: MappyState = {
  searchOptions: ["Ingredients","Pure Ing.","Essential Oil"],
  searchKey:"None",
  searchResult:""
}
function getCurrentState (state : MappyState) : MappyState{
  return state;
}


export const getSearchOptionsAction = createAction("Get search options");
export const onSearchResultsAction= createAction("On results");
export const getSearchKeyAction = createAction("Get search key");


// export function searchReducer(state : MappyState, action:Action) {
//     return _reducer(state, action);
// }
