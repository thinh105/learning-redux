import { TODO_ADD, TODO_TOGLE, FILTER_SET } from "./actionTypes";

export const doAddTodo = (id, name) => ({ type: TODO_ADD, todo: { id, name } });
export const doToggleTodo = (id) => ({ type: TODO_TOGLE, todo: { id } });
export const doSetFilter = (filter) => ({ type: FILTER_SET, filter });
