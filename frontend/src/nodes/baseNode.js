import { Handle, Position, useReactFlow } from "reactflow";

// Shared form element styles exported for use in all node files
export const fieldLabel = {
  display: "block",
  fontSize: 11,
  fontWeight: 600,
  color: "#64748b",
  marginBottom: 4,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export const fieldInput = {
  width: "100%",
  padding: "6px 8px",
  border: "1px solid #e2e8f0",
  borderRadius: 6,
  fontSize: 12,
  color: "#1e293b",
  background: "#f8fafc",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

export const fieldSelect = {
  ...fieldInput,
  cursor: "pointer",
  appearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 8px center",
  backgroundSize: "14px",
  paddingRight: 28,
};

export const fieldGroup = {
  marginBottom: 10,
};

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  width = 220,
  color = "#6366f1",
}) => {
  const { deleteElements } = useReactFlow();
  const getHandleTop = (index, total) =>
    `${((index + 1) * 100) / (total + 1)}%`;

  return (
    <div
      className="pipeline-node"
      style={{
        width,
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
        transition: "all 0.18s ease",
        overflow: "visible",
        position: "relative",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Colored header */}
      <div
        style={{
          background: color,
          borderRadius: "11px 11px 0 0",
          padding: "8px 10px 8px 14px",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>{title}</span>
        <button
          onClick={() => deleteElements({ nodes: [{ id }] })}
          title="Delete node"
          className="nodrag"
          style={{
            width: 18,
            height: 18,
            background: "rgba(0,0,0,0.20)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            flexShrink: 0,
          }}
        >
          ×
        </button>
      </div>

      {/* Content area */}
      <div style={{ padding: "12px 14px 14px" }}>{children}</div>

      {/* Input handles — left side */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: getHandleTop(index, inputs.length),
            left: -6,
            width: 12,
            height: 12,
            background: "#ffffff",
            border: `2.5px solid ${color}`,
            borderRadius: "50%",
            ...input.style,
          }}
        />
      ))}

      {/* Output handles — right side */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: getHandleTop(index, outputs.length),
            right: -6,
            width: 12,
            height: 12,
            background: color,
            border: "2.5px solid #ffffff",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};