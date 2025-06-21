import React from 'react';
import { PipelineToolbar } from './toolbar.js';
import { PipelineUI } from './ui.js';
import { SubmitButton } from './submit.js';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <div className="app-container" style={{ padding: '20px' }}>
      <ReactFlowProvider>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      </ReactFlowProvider>
    </div>
     
  );
}

export default App;
