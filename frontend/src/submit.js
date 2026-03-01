// submit.js

import { useState } from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      alert(
        `Pipeline Analysis\n` +
          `──────────────────\n` +
          `Nodes:     ${data.num_nodes}\n` +
          `Edges:     ${data.num_edges}\n` +
          `Is a DAG:  ${data.is_dag ? "Yes ✓" : "No ✗"}`
      );
    } catch (err) {
      alert(`Failed to submit pipeline:\n${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 0",
        background: "#f1f5f9",
        borderTop: "1px solid #e2e8f0",
      }}
    >
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          padding: "10px 36px",
          background: loading
            ? "#94a3b8"
            : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          color: "#ffffff",
          border: "none",
          borderRadius: 8,
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.03em",
          boxShadow: loading ? "none" : "0 4px 14px rgba(99, 102, 241, 0.35)",
          transition: "all 0.2s ease",
        }}
      >
        {loading ? "Submitting…" : "Submit Pipeline"}
      </button>
    </div>
  );
};