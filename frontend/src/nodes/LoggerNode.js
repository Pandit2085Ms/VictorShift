// LoggerNode.js
import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import './NodeForm.css';


export const LoggerNode = ({ id }) => {
  const handleLog = () => console.log(`LoggerNode (${id}) received input`);

  return (
    <BaseNode
      title="Logger"
      handles={[{ type: 'target', position: Position.Left, id: `${id}-in` }]}
    >
      <button onClick={handleLog}>Log to Console</button>
    </BaseNode>
  );
};
