// apiNode.js

import { useState } from "react";
import { BaseNode, fieldGroup, fieldInput, fieldLabel, fieldSelect } from "./baseNode";

const COLOR = "#06b6d4";

export const APINode = ({ id }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  return (
    <BaseNode
      id={id}
      title="API Request"
      color={COLOR}
      inputs={[{ id: "payload" }]}
      outputs={[{ id: "response" }]}
      width={240}
    >
      <div style={fieldGroup}>
        <span style={fieldLabel}>Method</span>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          style={fieldSelect}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </div>
      <div style={fieldGroup}>
        <span style={fieldLabel}>URL</span>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com/..."
          style={fieldInput}
        />
      </div>
    </BaseNode>
  );
};