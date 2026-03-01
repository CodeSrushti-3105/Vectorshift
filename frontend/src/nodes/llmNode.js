// llmNode.js

import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[
        { id: "system", style: { top: `${100 / 3}%` } },
        { id: "prompt", style: { top: `${200 / 3}%` } },
      ]}
      outputs={[
        { id: "response" }
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};