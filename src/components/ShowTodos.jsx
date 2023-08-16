import useTodoStore from "../store";
import RemoveTodo from "./RemoveTodo";
import CompleteTodo from "./CompleteTodo";

function ShowTodos() {
  const todos = useTodoStore((state) => state.todos);
  return (
    <div>
      <br />
      <ul>
        {todos.map((todosItem) => (
          <li
            key={todosItem.id}
            style={{
              borderColor: todosItem.isCompleted ? "green" : "red",
            }}
          >
            <p>{todosItem.text}</p>
            <RemoveTodo id={todosItem.id} />
            <CompleteTodo id={todosItem.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ShowTodos;
