// baseNode.js

import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      
      {/* Left Handles */}
      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={input.style}
        />
      ))}

      <div>
        <span>{title}</span>
      </div>

      <div>
        {children}
      </div>

      {/* Right Handles */}
      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={output.style}
        />
      ))}
    </div>
  );
};