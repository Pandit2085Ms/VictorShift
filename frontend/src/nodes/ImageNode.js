// ImageNode.js
import React, { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode.js';
import './NodeForm.css';


export const ImageNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');

  return (
    <BaseNode
      title="Image"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-url` },
        { type: 'source', position: Position.Right, id: `${id}-image` }
      ]}
    >
      <label>
        Image URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://..."
          style={{ width: '100%' }}
        />
      </label>
    </BaseNode>
  );
};
