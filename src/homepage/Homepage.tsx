import React from 'react';
import './homepage.css';
import image from './images/website_under_construction.jpg'

const Homepage = () => {
    return (
        <div>
            <h1>Website under construction</h1>
            <h3>Come again later</h3>
            <div id="img-container">
                <div className="box">
                    <img src={image} alt="Strona w budowie"/>
                </div>
            </div>
            <a href="https://jakubcendrowski.pl/quizappka">quiz appka</a>
        </div>
    );
};

export default Homepage;