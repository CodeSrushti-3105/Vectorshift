// customEdge.js
import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  useReactFlow,
} from "reactflow";

export const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const { deleteElements } = useReactFlow();

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onDelete = (evt) => {
    evt.stopPropagation();
    deleteElements({ edges: [{ id }] });
  };

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{ stroke: "#6366f1", strokeWidth: 2, ...style }}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <button
            onClick={onDelete}
            title="Delete edge"
            style={{
              width: 20,
              height: 20,
              background: "#ef4444",
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 700,
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 1px 6px rgba(0,0,0,0.25)",
              padding: 0,
            }}
          >
            ×
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};