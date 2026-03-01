// outputNode.js

import { useState } from "react";
import { BaseNode, fieldGroup, fieldInput, fieldLabel, fieldSelect } from "./baseNode";

const COLOR = "#10b981";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode id={id} title="Output" color={COLOR} inputs={[{ id: "value" }]}>
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
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          style={fieldSelect}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};