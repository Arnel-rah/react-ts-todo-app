import React from "react";
import { Plus } from "lucide-react";

type Props = {
  input: string;
  setInput: (value: string) => void;
  handleAdd: () => void;
};

const TodoInput: React.FC<Props> = ({ input, setInput, handleAdd }) => {
  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        className="input input-bordered w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button className="btn btn-primary flex items-center gap-2" onClick={handleAdd}>
        <Plus className="w-4 h-4" /> Ajouter
      </button>
    </div>
  );
};

export default TodoInput;
