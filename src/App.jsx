import { useRef, useState } from "react";
import style from "./App.module.css";
import TodoList from "./components/TodoList";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "hi",
    },
    {
      id: 2,
      text: "hello",
    },
    {
      id: 3,
      text: "안녕",
    },
  ]);
  const nextId = useRef(4);

  const onCreate = () => {
    setTodos(
      todos.concat({
        id: nextId.current,
        text: value,
      })
    );
    setValue("");
    nextId.current += 1;
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onCreate();
    }
  };

  return (
    <div className={style.app}>
      <div className={style.content}>
        <h1 className={style.title}>TodoList</h1>
        <TodoList todos={todos} onDelete={onDelete} />
        <div className={style.form}>
          <input
            className={style.todoInput}
            type="text"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
          <button className={style.todoButton} onClick={onCreate}>
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
