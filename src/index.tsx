import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<React.StrictMode>
    
</React.StrictMode>);

reportWebVitals(console.log);
