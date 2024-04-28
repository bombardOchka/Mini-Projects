import "./styles/style.scss";

import React from 'react';
import { createRoot } from 'react-dom/client';


import { TodoList } from './containers/todoList/todoList.jsx'





class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TodoList />
        )
    }
}


const root = createRoot(document.getElementById('App'));
root.render(<App />);