//baseNode.js
import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div
      style={{
        width: 220,
        minHeight: 100,
        border: "1px solid #333",
        borderRadius: 8,
        padding: 12,
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      {/* Left Side Handles (Inputs) */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      {/* Node Title */}
      <div
        style={{
          fontWeight: "bold",
          marginBottom: 8,
          fontSize: 14,
        }}
      >
        {title}
      </div>

      {/* Node Content */}
      <div>{children}</div>

      {/* Right Side Handles (Outputs) */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};