import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HelloFromLibA} from "libA";
import {HelloFromShadCnLib} from "libWithShadcn";

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
        <HelloFromLibA/>
        <HelloFromShadCnLib/>
      <App />
    </React.StrictMode>,
  );
}
