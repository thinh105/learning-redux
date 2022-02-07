import { connect } from "react-redux";
import { doToggleTodo } from "../actionCreators";

const TodoItemComponent = ({ todo, onToggleTodo }) => {
  const { name, id, completed } = todo;

  const itemStyle = completed ? {} : { textDecoration: "line-through" };
  return (
    <div>
      <button style={itemStyle} type="button" onClick={() => onToggleTodo(id)}>
        {name}
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onToggleTodo: (id) => dispatch(doToggleTodo(id))
});

export const TodoItem = connect(null, mapDispatchToProps)(TodoItemComponent);
