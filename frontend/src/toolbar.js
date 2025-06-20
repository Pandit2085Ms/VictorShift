// toolbar.js

import { DraggableNode } from './draggableNode.js';
import { useReactFlow } from 'reactflow';
import { submitPipeline } from './submit.js';

export const PipelineToolbar = () => {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = () => {
    const nodes = getNodes();
    const edges = getEdges();
    submitPipeline(nodes, edges);
  };

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleSubmit} style={{ padding: '8px 16px', background: '#4f46e5', color: 'white', borderRadius: '4px', border: 'none' }}>
          Submit Pipeline
        </button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
      </div>
    </div>
  );
};
