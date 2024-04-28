import "./styles/style.scss";

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Counter } from './components/counter.jsx'





class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Counter />
        )
    }
}


const root = createRoot(document.getElementById('App'));
root.render(<App />);