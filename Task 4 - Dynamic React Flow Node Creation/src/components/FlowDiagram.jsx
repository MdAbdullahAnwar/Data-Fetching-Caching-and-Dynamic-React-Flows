import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import "./FlowDiagram.css";

let id = 0;
const getId = () => `node_${id++}`;

const FlowDiagram = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [apiData, setApiData] = useState([]);

  const fetchApiData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await res.json();
      setApiData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const addNode = () => {
    const label =
      apiData.length > 0
        ? apiData[Math.floor(Math.random() * apiData.length)].title
        : `Node ${nodes.length + 1}`;

    const newNode = {
      id: getId(),
      data: { label },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className="flow-container">
      <div className="toolbar">
        <button className="btn add-btn" onClick={addNode}>
          Add Node
        </button>
        <button className="btn load-btn" onClick={fetchApiData}>
          Load API Data
        </button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
