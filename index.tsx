import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { PrimaryText } from './App';

let container = document.getElementById("app")!;
let root = createRoot(container)
root.render(
  <StrictMode>
    <body>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
        <PrimaryText />
    </body>
  </StrictMode>
);
