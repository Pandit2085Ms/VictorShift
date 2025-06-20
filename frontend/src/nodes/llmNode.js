// LLMNode.js
import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode.js';
import './NodeForm.css';


export const LLMNode = ({ id }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-system`,
      style: { top: '33%' },
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: '66%' },
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-response`,
    },
  ];

  return (
    <BaseNode title="LLM" handles={handles} style={{ height: 120 }}>
      <span>This is an LLM node.</span>
    </BaseNode>
  );
};
