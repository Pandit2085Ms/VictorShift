// submit.js

export const submitPipeline = async (nodes, edges) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nodes, edges })
    });

    if (!response.ok) {
      throw new Error('Failed to submit pipeline');
    }

    const result = await response.json();
    const { num_nodes, num_edges, is_dag } = result;

    alert(
      `✅ Pipeline Submitted!\n\nNodes: ${num_nodes}\nEdges: ${num_edges}\nIs DAG: ${is_dag ? 'Yes' : 'No'}`
    );
  } catch (error) {
    alert(`❌ Submission Failed:\n${error.message}`);
  }
};
export const SubmitButton = () => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="submit">Submit</button>
        </div>
    );
}