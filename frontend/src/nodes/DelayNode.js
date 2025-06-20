// DelayNode.js
import React, { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode.js';
import './NodeForm.css';


export const DelayNode = ({ id }) => {
  const [delay, setDelay] = useState(1000);

  return (
    <BaseNode
      title="Delay"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-in` },
        { type: 'source', position: Position.Right, id: `${id}-out` }
      ]}
    >
      <label>
        Delay (ms):
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(+e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
