import React from "react";
import { CheckCircle, Trash2 } from "lucide-react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center bg-base-200 rounded-xl px-4 py-3 transition hover:bg-base-300">
      <div
        className={`flex items-center gap-2 cursor-pointer select-none ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => toggleComplete(todo.id)}
      >
        <CheckCircle
          className={`w-5 h-5 ${todo.completed ? "text-success" : "text-gray-400"}`}
        />
        <span>{todo.text}</span>
      </div>

      <button
        className="btn btn-xs btn-error flex items-center gap-1"
        onClick={() => deleteTodo(todo.id)}
      >
        <Trash2 className="w-4 h-4" /> Supprimer
      </button>
    </div>
  );
};

export default TodoItem;
