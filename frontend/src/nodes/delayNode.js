// delayNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const DelayNode = ({ id }) => {
  const [seconds, setSeconds] = useState(1);

  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={[{ id: "trigger" }]}
      outputs={[{ id: "delayed" }]}
    >
      <label>
        Seconds:
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};