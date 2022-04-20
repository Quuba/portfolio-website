import React from 'react';
import './homepage.css';
import image from './images/website_under_construction.jpg'
import {useRoutes, Routes, Route, Link, HashRouter} from "react-router-dom";

const Homepage = () => {

    return (
        <div>
            <h1>Website under construction</h1>
            <h3>Come again later</h3>
            <div id="img-container">
                <div className="box">
                    <img src={image} alt="Strona w budowie"/>
                </div>
                <a href="https://jakubcendrowski.pl/wave-function-collapse-algorithm">sudoku</a>
                <Link to={'a'}>AAAA</Link>
            </div>
        </div>
    );
};

export default Homepage;