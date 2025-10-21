import React from "react";
import { List, CheckCircle, Clock } from "lucide-react";

type Filter = "Tous" | "Finis" | "En cours";

type Props = {
  filter: Filter;
  setFilter: (f: Filter) => void;
};

const TodoFilter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center gap-2 mb-6">
      {(["Tous", "Finis", "En cours"] as Filter[]).map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`btn btn-sm flex items-center gap-2 rounded-xl transition-all duration-200 ${
            filter === f ? "btn-primary" : "btn-outline"
          }`}
        >
          {f === "Tous" && <List className="w-4 h-4" />}
          {f === "Finis" && <CheckCircle className="w-4 h-4" />}
          {f === "En cours" && <Clock className="w-4 h-4" />}
          {f}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
