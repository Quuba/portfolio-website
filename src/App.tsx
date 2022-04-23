import React from 'react';
import './App.css';
import Homepage from "./homepage/Homepage";
import {HashRouter, useRoutes} from "react-router-dom";
import SecretPage from "./secret/SecretPage";
import Header from "./common/Header";
import ProjectPage from "./project page/ProjectPage";
import InfoPage from "./info page/InfoPage";


const App = () => {
    let route = useRoutes([
        {path: '/', element: <Homepage/>},
        {path: '/projects', element:<ProjectPage/>},
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
