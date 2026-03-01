// inputNode.js

import { useState } from "react";
import { BaseNode, fieldGroup, fieldInput, fieldLabel, fieldSelect } from "./baseNode";

const COLOR = "#3b82f6";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode id={id} title="Input" color={COLOR} outputs={[{ id: "value" }]}>
      <div style={fieldGroup}>
        <span style={fieldLabel}>Name</span>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={fieldInput}
        />
      </div>
      <div style={fieldGroup}>
        <span style={fieldLabel}>Type</span>
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={fieldSelect}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};