# 🧠 VectorShift Frontend-Backend Technical Assignment

This project is a node-based visual pipeline builder built with **React.js** and **FastAPI**, designed to meet the specifications of the VectorShift technical assessment.

## 🚀 Features

### ✅ Node Pipeline Editor (Frontend)
- Drag-and-drop interface using **React Flow**.
- Predefined node types:
  - `Input`
  - `LLM`
  - `Output`
  - `Text`
- Nodes can be connected with smooth edges to build data pipelines.
- Dynamic **Text Node**:
  - Resizes as the user types.
  - Recognizes `{{variable}}` syntax and adds input handles accordingly.

### 🔗 Backend Integration (FastAPI)
- Frontend submits pipeline data (nodes and edges) to the backend.
- Backend analyzes the graph and returns:
  - Total number of nodes.
  - Total number of edges.
  - Whether the graph is a **DAG (Directed Acyclic Graph)**.

### 📊 Result Alert
- Results are displayed via a popup alert after backend response.

---

## 🛠️ Tech Stack

**Frontend**:
- React.js
- React Flow
- Zustand (for state management)
- Basic CSS / TailwindCSS (if applicable)

**Backend**:
- Python 3.11+
- FastAPI
- NetworkX (for DAG check)

---

## 📦 Installation & Setup

### Frontend
```bash
cd frontend
npm install
npm start
