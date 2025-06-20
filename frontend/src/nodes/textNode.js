// TextNode.js
import React, { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode.js';
import './NodeForm.css';


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    // Later enhancement: detect variables like {{input}} and add left-side handles
  };

  return (
    <BaseNode
      title="Text"
      handles={[{ type: 'source', position: Position.Right, id: `${id}-output` }]}
      style={{ height: 100 }}
    >
      <label>
        Text:
        <input
          type="text"
          value={currText}
          onChange={handleTextChange}
          style={{ width: '100%' }}
        />
      </label>
    </BaseNode>
  );
};
