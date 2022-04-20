import React from 'react';
import './App.css';
import Homepage from "./homepage/Homepage";
import {BrowserRouter, HashRouter, useRoutes} from "react-router-dom";
import SecretPage from "./secret/SecretPage";


const App = () => {
    let route = useRoutes([
        {path: '', element: <Homepage/>},
        {path: 'secret', element: <SecretPage/>}
    ])

    return (
        route
    );
}

const AppWrapper = () => {
    return (
        <HashRouter>
            <App/>
        </HashRouter>
    )
}
export default AppWrapper;
