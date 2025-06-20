from fastapi import FastAPI, Request, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
import networkx as nx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict to "http://localhost:3000" etc.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.get('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    return {'status': 'parsed'}

@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    data = await request.json()
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    # Build a directed graph
    G = nx.DiGraph()

    for node in nodes:
        G.add_node(node["id"])

    for edge in edges:
        G.add_edge(edge["source"], edge["target"])

    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag
    }

