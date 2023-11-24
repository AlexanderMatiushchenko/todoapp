import TodoItem from "../todoitem";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={Math.random()} {...todo} />
      ))}
    </ul>
  );
}
export default TodoList;
