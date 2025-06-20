// MathNode.js
import React, { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode.js';
import './NodeForm.css';


export const MathNode = ({ id }) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <BaseNode
      title="Math Add"
      handles={[{ type: 'source', position: Position.Right, id: `${id}-sum` }]}
    >
      <label>
        A:
        <input type="number" value={a} onChange={(e) => setA(+e.target.value)} />
      </label>
      <br />
      <label>
        B:
        <input type="number" value={b} onChange={(e) => setB(+e.target.value)} />
      </label>
      <div>Result: {a + b}</div>
    </BaseNode>
  );
};
