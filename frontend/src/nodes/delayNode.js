// delayNode.js

import { useState } from "react";
import { BaseNode, fieldGroup, fieldInput, fieldLabel } from "./baseNode";

const COLOR = "#ec4899";

export const DelayNode = ({ id }) => {
  const [seconds, setSeconds] = useState(1);

  return (
    <BaseNode
      id={id}
      title="Delay"
      color={COLOR}
      inputs={[{ id: "trigger" }]}
      outputs={[{ id: "delayed" }]}
    >
      <div style={fieldGroup}>
        <span style={fieldLabel}>Duration (seconds)</span>
        <input
          type="number"
          min={0}
          step={0.1}
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          style={fieldInput}
        />
      </div>
    </BaseNode>
  );
};