import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  width = 200,
}) => {
  const getHandlePosition = (index, total) =>
    `${((index + 1) * 100) / (total + 1)}%`;

  return (
    <div
      style={{
        width,
        minHeight: 80,
        border: "1px solid black",
        padding: 10,
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: getHandlePosition(index, inputs.length) }}
        />
      ))}

      <div style={{ marginBottom: 8 }}>
        <strong>{title}</strong>
      </div>

      <div>{children}</div>

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: getHandlePosition(index, outputs.length) }}
        />
      ))}
    </div>
  );
};