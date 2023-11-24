import { useContext } from "react";
import { Context } from "../../context";
function TodoItem({ title, id }) {
  const { removeTodo } = useContext(Context);
  return (
    <li>
      <label>
        {id}
        {title}
      </label>
      <span
        onClick={() => removeTodo(id)}
        style={{ color: "red", cursor: "pointer" }}
      >
        x
      </span>
    </li>
  );
}
export default TodoItem;
