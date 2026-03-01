// randomNumberNode.js

import { BaseNode } from "./baseNode";

export const RandomNumberNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Random Number"
      outputs={[{ id: "number" }]}
    >
      <span>Generates a random number</span>
    </BaseNode>
  );
};