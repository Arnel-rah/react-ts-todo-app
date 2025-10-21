import React from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, toggleComplete, deleteTodo }) => {
  if (todos.length === 0)
    return <p className="text-center text-gray-500 italic">Aucune tâche à afficher 💤</p>;

  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
