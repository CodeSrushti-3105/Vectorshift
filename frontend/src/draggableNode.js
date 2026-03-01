// draggableNode.js

export const DraggableNode = ({ type, label, color = '#6366f1', icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      style={{
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        borderRadius: 8,
        background: `${color}20`,
        border: `1px solid ${color}50`,
        userSelect: 'none',
        transition: 'background 0.15s, transform 0.1s',
      }}
      draggable
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.96)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {icon && (
        <span
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            background: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 11,
            color: '#fff',
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {icon}
        </span>
      )}
      <span style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 500 }}>
        {label}
      </span>
    </div>
  );
};