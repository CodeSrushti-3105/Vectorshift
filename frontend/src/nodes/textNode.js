// textNode.js

import { useState, useEffect, useRef, useMemo } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );

  const textareaRef = useRef(null);

  // Auto resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [currText]);

  // Extract variables inside {{ }}
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [];
    let match;

    while ((match = regex.exec(currText)) !== null) {
      matches.push(match[1]);
    }

    // remove duplicates
    return [...new Set(matches)];
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map((variable) => ({
        id: variable,
      }))}
      outputs={[{ id: "output" }]}
    >
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        style={{ width: "100%", resize: "none" }}
      />
    </BaseNode>
  );
};