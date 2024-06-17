"use client";

import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

const ReactCompilerPage = () => {
  "use memo";

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  useEffect(() => {
    console.log("ReactCompilerPage");
  });

  return (
    <div className="w-screen h-screen">
      <div>React Compiler</div>
      <button
        className="border border-black"
        onClick={() => setCount((c) => c + 1)}
      >
        Add Count
      </button>
      <div>Count: {count}</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <ChildComponent name={name} />
    </div>
  );
};

export default ReactCompilerPage;
