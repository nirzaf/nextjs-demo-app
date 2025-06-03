"use client";

import { useState } from "react";

export const ClientComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Client Side Component</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};
