import { TODO_ADD, TODO_TOGLE, FILTER_SET } from "./actionCreators";

const intialTodos = [
  {
    id: 0,
    name: "learn Redux"
  },
  {
    id: 1,
    name: "learn Mobx"
  }
];

const applyAddTodo = (state, action) =>
  state.concat({
    ...action.todo,
    complete: false
  });

const applyToggle = (state, action) =>
  state.map((todo) =>
    todo.id === action.todo.id ? { ...todo, completed: !todo.completed } : todo
  );

const applySetFilter = (state, action) => action.filter;

export const todoReducer = (state = intialTodos, action) => {
  switch (action.type) {
    case TODO_ADD: {
      return applyAddTodo(state, action);
    }
    case TODO_TOGLE: {
      return applyToggle(state, action);
    }
    default:
      return state;
  }
};

export const filterReducer = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case FILTER_SET: {
      return applySetFilter(state, action);
    }

    default:
      return state;
  }
};
