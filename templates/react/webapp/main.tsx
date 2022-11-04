import React from "react";
import {createRoot} from "react-dom/client";
import App from "./src/App"

export default function main(){
    const root = createRoot(document.querySelector("fullstacked-root"));
    root.render(<App />);
}
