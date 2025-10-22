import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/globals.css"

import {Button} from "./components/ui/button";

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <Button>Hello Button</Button>
        </React.StrictMode>,
    );
}
