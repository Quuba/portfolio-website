import React from 'react';
import './Homepage.css';
import Note from "./Note";

const Homepage = () => {

    return (
        <div className={'Homepage'}>
            {/*<h1>Website under construction</h1>*/}
            {/*<h3>Come again later</h3>*/}
            {/*<div id="img-container">*/}
            {/*    <div className="box">*/}
            {/*        <img src={image} alt="Strona w budowie"/>*/}
            {/*    </div>*/}
            {/*    <a href="https://jakubcendrowski.pl/wave-function-collapse-algorithm">sudoku</a>*/}
            {/*</div>*/}
            <div>
                <h1>Jakub Cendrowski</h1>
                <h2>Web developer</h2>
                <Note id={'note1'}>
                    {/*<p>Strona w trakcie tworzenia.<br/> Wpadnij później</p>*/}
                    <p>Website is under development.<br/><br/> Come again later</p>

                </Note>
                <Note id={'note2'} >
                    <p>
                        You can find me here:
                        <br/><br/>
                        <a href={'https://github.com/Quuba'}>Github</a>
                    </p>
                </Note>

            </div>
        </div>
    );
};

export default Homepage;