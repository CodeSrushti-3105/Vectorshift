// toolbar.js

import { DraggableNode } from './draggableNode';
import { useStore } from './store';

export const PipelineToolbar = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(90deg, #0f172a, #1e293b)',
        borderBottom: '1px solid #334155',
        padding: '0 28px',
        height: 64,
        flexShrink: 0,
        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      }}
    >
      {/* Left Section: Branding + Nodes */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        
        {/* Branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 0 12px rgba(139,92,246,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 15,
              color: '#fff',
            }}
          >
            VS
          </div>

          <span
            style={{
              color: '#f8fafc',
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '-0.2px',
            }}
          >
            VectorShift
          </span>
        </div>

        {/* Node palette */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <DraggableNode type="customInput" label="Input" color="#3b82f6" icon="→" />
          <DraggableNode type="llm" label="LLM" color="#8b5cf6" icon="⚡" />
          <DraggableNode type="customOutput" label="Output" color="#10b981" icon="←" />
          <DraggableNode type="text" label="Text" color="#f59e0b" icon="T" />
          <DraggableNode type="math" label="Math" color="#ef4444" icon="∑" />
          <DraggableNode type="api" label="API" color="#06b6d4" icon="⚙" />
          <DraggableNode type="condition" label="Condition" color="#f97316" icon="⬡" />
          <DraggableNode type="delay" label="Delay" color="#ec4899" icon="⏱" />
          <DraggableNode type="random" label="Random" color="#6366f1" icon="⁓" />
        </div>
      </div>

      {/* Right Section: Node / Edge Counter */}
      <div
        style={{
          marginLeft: 'auto',
          fontSize: 12,
          color: '#94a3b8',
          fontWeight: 500,
        }}
      >
        {nodes.length} Nodes • {edges.length} Connections
      </div>
    </div>
  );
};