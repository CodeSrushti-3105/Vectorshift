// inputNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(
    data?.inputType || "Text"
  );

  return (
    <BaseNode
      id={id}
      title="Input"
      outputs={[{ id: "value" }]}   // right-side handle
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        
        <label style={{ fontSize: 12 }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>

        <label style={{ fontSize: 12 }}>
          Type:
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>

      </div>
    </BaseNode>
  );
};