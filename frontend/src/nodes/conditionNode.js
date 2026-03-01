// conditionNode.js

import { BaseNode } from "./baseNode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      inputs={[{ id: "value" }]}
      outputs={[
        { id: "true" },
        { id: "false" }
      ]}
    >
      <span>Checks a condition</span>
    </BaseNode>
  );
};