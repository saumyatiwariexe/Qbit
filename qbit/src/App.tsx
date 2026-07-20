import { useState } from "react";
import CommandBar from "./components/commandBar";

function App() {
  const [query, setQuery] = useState("");

  const handleRecall = (text: string) => {
    console.log("Recalled:", text);
    setQuery(text);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 gap-6">
      <h1 className="text-5xl font-bold text-red-400">
        Tailwind Test
      </h1>

      <CommandBar
        onRecall={handleRecall}
        disabled={false}
      />

      {query && (
        <div className="text-white text-xl">
          <span className="font-semibold">Last Recall:</span> {query}
        </div>
      )}
    </div>
  );
}

export default App;