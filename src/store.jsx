import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: uuidv4(), text, isCompleted: false }],
    })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id != id) })),

  completeTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, isCompleted: true } : { todoItem }
      ),
    })),
}));

export default useTodoStore;
