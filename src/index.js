import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { combineReducers, createStore } from "redux";

import { Provider, connect } from "react-redux";

import App from "./App";

// Action Types
const TODO_ADD = "TODO_ADD";
const TODO_TOGLE = "TODO_TOGLE";
const FILTER_SET = "FILTER_SET";

// Reducers
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

const todoReducer = (state = intialTodos, action) => {
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

const applyAddTodo = (state, action) =>
  state.concat({
    ...action.todo,
    complete: false
  });

const applyToggle = (state, action) =>
  state.map((todo) =>
    todo.id === action.todo.id ? { ...todo, completed: !todo.completed } : todo
  );

const filterReducer = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case FILTER_SET: {
      return applySetFilter(state, action);
    }

    default:
      return state;
  }
};

const applySetFilter = (state, action) => action.filter;

// Action Creators
const doAddTodo = (id, name) => ({ type: TODO_ADD, todo: { id, name } });
const doToggleTodo = (id) => ({ type: TODO_TOGLE, todo: { id } });
const doSetFilter = (filter) => ({ type: FILTER_SET, filter });

// Store
const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer
});

const store = createStore(rootReducer);

// Todo App Component
const TodoApp = ({ todos, onToggleTodo }) => (
  <TodoList todos={todos} onToggleTodo={onToggleTodo} />
);

// TodoList Component
const TodoList = ({ todos, onToggleTodo }) => (
  <div>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
    ))}
  </div>
);

// Todo Item Component
const TodoItem = ({ todo, onToggleTodo }) => {
  const { name, id, completed } = todo;
  return (
    <div>
      {name}
      <button type="button" onClick={() => onToggleTodo(id)}>
        {completed ? "Incomplete" : "Complete"}
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");

const mapStateToProps = (state) => ({
  todos: state.todoState
});

const mapDispatchToProps = (dispatch) => ({
  onToggleTodo: (id) => dispatch(doToggleTodo(id))
});

const ConnectedTodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <ConnectedTodoApp />
    </StrictMode>
  </Provider>,
  rootElement
);
