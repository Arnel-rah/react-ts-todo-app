import  { useState } from "react";
import { List } from "lucide-react";
import TodoInput from "./components/TodoInput";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = "Tous" | "Finis" | "En cours";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<Filter>("Tous");

  const handleAdd = () => {
    if (input.trim() === "") return;
    const newTodo: Todo = { id: Date.now(), text: input.trim(), completed: false };
    setTodos((prev) => [newTodo, ...prev]);
    setInput("");
  };

  const toggleComplete = (id: number) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTodo = (id: number) =>
    confirm("Supprimer cette tâche ?") && setTodos((prev) => prev.filter((t) => t.id !== id));

  const filteredTodos = todos.filter((t) =>
    filter === "Finis" ? t.completed : filter === "En cours" ? !t.completed : true
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-xl bg-base-100 shadow-xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <List className="w-7 h-7" /> Gestionnaire de Tâches
        </h1>

        <TodoInput input={input} setInput={setInput} handleAdd={handleAdd} />
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
