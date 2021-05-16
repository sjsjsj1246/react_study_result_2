import React from "react";
import style from "./TodoList.module.css";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className={style.todoItem}>
      <p className={style.title}>{todo.text}</p>
      <button className={style.deleteButton} onClick={() => onDelete(todo.id)}>
        삭제하기
      </button>
    </div>
  );
};

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className={style.todoList}>
      {todos.map((todo) => (
        <TodoItem todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
