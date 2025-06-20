// ToggleNode.js
import React, { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode.js';
import './NodeForm.css';


export const ToggleNode = ({ id }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <BaseNode
      title="Toggle"
      handles={[{ type: 'source', position: Position.Right, id: `${id}-toggle` }]}
    >
      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        Enabled: {enabled.toString()}
      </label>
    </BaseNode>
  );
};
