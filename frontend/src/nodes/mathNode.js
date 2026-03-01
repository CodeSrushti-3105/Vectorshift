// mathNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState("add");

  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={[{ id: "a" }, { id: "b" }]}
      outputs={[{ id: "result" }]}
    >
      <label>
        Operation:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </label>
    </BaseNode>
  );
};