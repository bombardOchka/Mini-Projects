import "./styles/style.scss";

import React from 'react';
import { createRoot } from 'react-dom/client';


import { UsersTable } from './containers/UsersTable/UsersTable.jsx'

import { store } from './store.js'
import { Provider } from "react-redux";













const App = () => {

    return (
        <>
            <Provider store={store}>
                <UsersTable />
            </Provider>
        </>
    )

}


const root = createRoot(document.getElementById('App'));
root.render(<App />);