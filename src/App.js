import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./components/todolist";
import { Context } from "./context";
function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getItemTodos();
  }, []);
  function handleChange(event) {
    setTitle(event.target.value);
  }
  function getItemTodos() {
    const localStorageTodos = localStorage.getItem("todosKey");
    localStorageTodos && setTodos(JSON.parse(localStorageTodos));
  }
  function addTodo() {
    title &&
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 999),
          title: title,
        },
      ]);
    setTitle("");
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function setItemToLocalStorage(key, todos) {
    const todosArr = JSON.stringify(todos);

    localStorage.setItem(key, todosArr);
    console.log(key);
    console.log(todos);
  }
  useEffect(() => {
    setItemToLocalStorage("todosKey", todos);

    console.log("change");
  }, [todos]);

  return (
    <Context.Provider value={{ removeTodo }}>
      <div>
        <h1>To do App</h1>
        <div>
          <input
            value={title}
            type="text"
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <button onClick={addTodo}>Add to do</button>
        </div>
        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}

export default App;
