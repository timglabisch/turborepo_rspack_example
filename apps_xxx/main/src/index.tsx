import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HelloFromLibA} from "libA";

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
        <HelloFromLibA/>
      <App />
    </React.StrictMode>,
  );
}
