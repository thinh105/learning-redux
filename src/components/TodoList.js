import { connect } from "react-redux";
import { TodoItem } from "./TodoItem";

const TodoListComponent = ({ todos, onToggleTodo }) => (
  <div>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todoState
});

export const TodoList = connect(mapStateToProps)(TodoListComponent);
