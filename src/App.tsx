import { useState } from "react";
import "./style.model.css";

interface Todo {
  message: string;
  id: number;
}

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    const todoObj: Todo = { message: todo, id: Date.now() };

    setTodos((prev: Todo[]) => [todoObj, ...prev]);
    setTodo("");
  };

  const handleDelete = (id: number) => {
    const filterdTodos = todos.filter(todo => todo.id !== id)
    setTodos(filterdTodos)
  }

  return (
    <div className="container">
      <div className="searchContainer">
        <input className="input" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} name="todo" placeholder="add the todos..." />
        <button className="btn" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <div className="todoList" >{todos.map((todo) => {
        return <button key={todo.id} onClick={() => handleDelete(todo.id)} className="todoBtn">{todo.message}</button>
      })}
      </div>
    </div>
  );
};

export default App;
