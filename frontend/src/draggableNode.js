export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
    event.target.style.cursor = 'grabbing';
  };

  const onDragEnd = (event) => {
    event.target.style.cursor = 'grab';
  };

  return (
    <div
      className={`draggable-node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: '#1C2536',
        color: '#fff',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
        fontWeight: 500,
        fontSize: '14px',
        textAlign: 'center',
      }}
    >
      {label}
    </div>
  );
};
