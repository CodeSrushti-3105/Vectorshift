// randomNumberNode.js

import { useState } from "react";
import { BaseNode, fieldGroup, fieldInput, fieldLabel } from "./baseNode";

const COLOR = "#6366f1";

export const RandomNumberNode = ({ id }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  return (
    <BaseNode
      id={id}
      title="Random Number"
      color={COLOR}
      outputs={[{ id: "number" }]}
    >
      <div style={{ display: "flex", gap: 8 }}>
        <div style={{ ...fieldGroup, flex: 1 }}>
          <span style={fieldLabel}>Min</span>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            style={fieldInput}
          />
        </div>
        <div style={{ ...fieldGroup, flex: 1 }}>
          <span style={fieldLabel}>Max</span>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            style={fieldInput}
          />
        </div>
      </div>
    </BaseNode>
  );
};