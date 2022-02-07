export const TODO_ADD = "TODO_ADD";
export const TODO_TOGLE = "TODO_TOGLE";
export const FILTER_SET = "FILTER_SET";

export const doAddTodo = (id, name) => ({ type: TODO_ADD, todo: { id, name } });
export const doToggleTodo = (id) => ({ type: TODO_TOGLE, todo: { id } });
export const doSetFilter = (filter) => ({ type: FILTER_SET, filter });
