// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        background: '#1e293b',
        borderBottom: '1px solid #334155',
        padding: '0 20px',
        height: 60,
        flexShrink: 0,
      }}
    >
      {/* Branding */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginRight: 28,
          paddingRight: 24,
          borderRight: '1px solid #334155',
          height: '100%',
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
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
        <span style={{ color: '#f1f5f9', fontWeight: 600, fontSize: 14, letterSpacing: '0.01em' }}>
          VectorShift
        </span>
      </div>

      {/* Node palette */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
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
  );
};