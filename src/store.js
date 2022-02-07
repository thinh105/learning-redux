import { combineReducers, createStore } from "redux";
import { todoReducer, filterReducer } from "./reducers";

const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer
});

export const store = createStore(rootReducer);
