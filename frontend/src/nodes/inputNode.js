// InputNode.js
import React, { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode.js';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <BaseNode
      title="Input"
      handles={[
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-value`
        }
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{ width: '100%' }}
          />
        </label>

        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange} style={{ width: '100%' }}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
