// mathNode.js

import { useState } from "react";
import { BaseNode, fieldGroup, fieldLabel, fieldSelect } from "./baseNode";

const COLOR = "#ef4444";

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState("add");

  return (
    <BaseNode
      id={id}
      title="Math"
      color={COLOR}
      inputs={[{ id: "a" }, { id: "b" }]}
      outputs={[{ id: "result" }]}
    >
      <div style={fieldGroup}>
        <span style={fieldLabel}>Operation</span>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={fieldSelect}
        >
          <option value="add">Add  (a + b)</option>
          <option value="subtract">Subtract  (a − b)</option>
          <option value="multiply">Multiply  (a × b)</option>
          <option value="divide">Divide  (a ÷ b)</option>
        </select>
      </div>
    </BaseNode>
  );
};