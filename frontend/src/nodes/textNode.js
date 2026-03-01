import { useState, useEffect, useRef, useMemo } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./baseNode";

const MIN_WIDTH = 200;
const MAX_WIDTH = 250;

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

    // Reset height before recalculating
    el.style.height = "auto";

    // Measure longest line
    const lines = text.split("\n");
    const longestLine = lines.reduce(
      (a, b) => (a.length > b.length ? a : b),
      ""
    );

    const calculatedWidth = longestLine.length * 8 + 40;

    const finalWidth = Math.min(
      MAX_WIDTH,
      Math.max(MIN_WIDTH, calculatedWidth)
    );

    setNodeWidth(finalWidth);

    // Apply width so wrapping can occur
    el.style.width = "100%";
    el.style.whiteSpace = "pre-wrap";
    el.style.wordBreak = "break-word";

    // Now adjust height after wrapping
    el.style.height = el.scrollHeight + "px";

    updateNodeInternals(id);
  }, [text, variables, id, updateNodeInternals]);

  return (
    <BaseNode
      id={id}
      title="Text"
      width={nodeWidth}
      inputs={variables.map((name) => ({ id: name }))}
      outputs={[{ id: "output" }]}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          resize: "none",
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
          fontSize: 14,
          padding: 6,
        }}
      />
    </BaseNode>
  );
};