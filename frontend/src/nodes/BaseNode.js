// BaseNode.js
import React from 'react';
import { Handle } from 'reactflow';
import './NodeForm.css';


/**
 * BaseNode component
 * @param {string} title - Title to display on the node
 * @param {ReactNode} children - Custom UI elements inside the node
 * @param {Array} handles - Array of handle configs (type, position, id, optional style)
 * @param {Object} style - Optional custom styling for the node container
 */
export const BaseNode = ({ title, children, handles = [], style = {} }) => {
  return (
    <div
      style={{
        width: 200,
        border: '1px solid black',
        borderRadius: 6,
        padding: 10,
        background: '#fff',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
        ...style,
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{title}</div>

      <div style={{ marginBottom: 8 }}>{children}</div>

      {handles.map(({ type, position, id, style: handleStyle = {} }) => (
        <Handle
          key={id}
          type={type}
          position={position}
          id={id}
          style={handleStyle}
        />
      ))}
    </div>
  );
};
