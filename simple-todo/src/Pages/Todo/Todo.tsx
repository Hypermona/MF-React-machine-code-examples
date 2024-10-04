import { useState } from "react";
import style from "./todo.module.scss";

function Todo() {
  const [todos, setTodos] = useState<{ id: string; value: string }[]>([]);
  console.log(todos);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (const data of new FormData(e.currentTarget)) {
      if (data[1].toString()) {
        setTodos((prev) => [
          ...prev,
          { id: Math.random().toString(16).slice(2), value: data[1].toString() },
        ]);
      }
    }
    e.currentTarget.reset();
  };
  const onDelete = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input name="todo" className={style.input} />
        <input type="submit" className={style.btn + " " + style.primary} />
      </form>

      <ul className={style.card}>
        {todos.map((todo) => (
          <li key={todo.id} className={style.item} onClick={() => onDelete(todo.id)}>
            {todo.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
