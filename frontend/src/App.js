import React from 'react';
import { PipelineToolbar } from './toolbar.js';
import { PipelineUI } from './ui.js';
import { SubmitButton } from './submit.js';

function App() {
  return (
    <div className="app-container" style={{ padding: '20px' }}>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
