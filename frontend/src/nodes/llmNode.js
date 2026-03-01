// llmNode.js

import { BaseNode } from "./baseNode";

const COLOR = "#8b5cf6";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      color={COLOR}
      inputs={[
        { id: "system", style: { top: `${100 / 3}%` } },
        { id: "prompt", style: { top: `${200 / 3}%` } },
      ]}
      outputs={[{ id: "response" }]}
    >
      <p style={{ margin: 0, fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>
        Connects to a large language model. Wire in a <strong>system</strong>{" "}
        prompt and a <strong>prompt</strong>, then read the{" "}
        <strong>response</strong>.
      </p>
    </BaseNode>
  );
};