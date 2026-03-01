// apiNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const APINode = ({ id }) => {
  const [url, setUrl] = useState("");

  return (
    <BaseNode
      id={id}
      title="API Request"
      inputs={[{ id: "payload" }]}
      outputs={[{ id: "response" }]}
    >
      <label>
        URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};