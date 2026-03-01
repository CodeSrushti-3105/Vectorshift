// conditionNode.js

import { useState } from "react";
import { BaseNode, fieldGroup, fieldInput, fieldLabel } from "./baseNode";

const COLOR = "#f97316";

export const ConditionNode = ({ id }) => {
  const [condition, setCondition] = useState("");

  return (
    <BaseNode
      id={id}
      title="Condition"
      color={COLOR}
      inputs={[{ id: "value" }]}
      outputs={[{ id: "true" }, { id: "false" }]}
    >
      <div style={fieldGroup}>
        <span style={fieldLabel}>Expression</span>
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g. value > 0"
          style={fieldInput}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 6 }}>
        {["true", "false"].map((label) => (
          <span
            key={label}
            style={{
              fontSize: 10,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: 10,
              background: label === "true" ? "#dcfce7" : "#fee2e2",
              color: label === "true" ? "#16a34a" : "#dc2626",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </BaseNode>
  );
};