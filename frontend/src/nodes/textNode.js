import { useState, useEffect, useRef, useMemo } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./baseNode";

const COLOR = "#f59e0b";
const MIN_WIDTH = 220;
const MAX_WIDTH = 480;

const extractVariables = (text) => {
  const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
  const variables = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    variables.add(match[1]);
  }
  return Array.from(variables);
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const [nodeWidth, setNodeWidth] = useState(MIN_WIDTH);
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => extractVariables(text), [text]);

  useEffect(() => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;

    el.style.height = "auto";

    const lines = text.split("\n");
    const longestLine = lines.reduce(
      (a, b) => (a.length > b.length ? a : b),
      ""
    );
    const calculatedWidth = longestLine.length * 8 + 60;
    const finalWidth = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, calculatedWidth));
    setNodeWidth(finalWidth);

    el.style.width = "100%";
    el.style.whiteSpace = "pre-wrap";
    el.style.wordBreak = "break-word";
    el.style.height = el.scrollHeight + "px";

    updateNodeInternals(id);
  }, [text, variables, id, updateNodeInternals]);

  return (
    <BaseNode
      id={id}
      title="Text"
      color={COLOR}
      width={nodeWidth}
      inputs={variables.map((name) => ({ id: name }))}
      outputs={[{ id: "output" }]}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text… use {{variable}} to create handles"
        style={{
          resize: "none",
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
          fontSize: 13,
          lineHeight: 1.6,
          padding: "6px 8px",
          border: "1px solid #e2e8f0",
          borderRadius: 6,
          background: "#f8fafc",
          color: "#1e293b",
          outline: "none",
          fontFamily: "inherit",
          minHeight: 60,
        }}
      />
      {variables.length > 0 && (
        <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 4 }}>
          {variables.map((v) => (
            <span
              key={v}
              style={{
                fontSize: 10,
                fontWeight: 600,
                padding: "2px 7px",
                borderRadius: 10,
                background: `${COLOR}20`,
                color: COLOR,
                border: `1px solid ${COLOR}40`,
              }}
            >
              {"{{"}{v}{"}}"}
            </span>
          ))}
        </div>
      )}
    </BaseNode>
  );
};