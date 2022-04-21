import React from 'react';
import './App.css';
import Homepage from "./homepage/Homepage";
import {HashRouter, useRoutes} from "react-router-dom";
import SecretPage from "./secret/SecretPage";
import Header from "./common/Header";
import ProjectsPage from "./projects page/ProjectsPage";
import InfoPage from "./info page/InfoPage";


const App = () => {
    let route = useRoutes([
        {path: '/', element: <Homepage/>},
        {path: '/projects', element:<ProjectsPage/>},
        {path: '/info', element:<InfoPage/>},
        {path: '/secret', element: <SecretPage/>}
    ])

    return (
        <div className={'App'}>
            <Header/>
            {route}
        </div>
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
