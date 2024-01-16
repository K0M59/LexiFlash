import React from "react";
import { createRoot } from "react-dom/client";
// import

const container = document.getElementById("app");
const root = createRoot(container);

function App() {
    return <h1>The coding environment is ready for magic</h1>
}

root.render(<App />);
