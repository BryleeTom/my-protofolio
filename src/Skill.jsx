import Header from './Header';
import css from './assets/Language/css/css.svg';
import html from './assets/Language/html/html.svg';
import js from './assets/Language/js/js.svg';
import kivy from './assets/Language/kivy/kivy.svg';
import kivymd from './assets/Language/kivymd/kivymd.svg';
import nodejs from './assets/Language/nodejs/nodejs.svg';
import pygame from './assets/Language/pygame/pygame.svg';
import reactjs from './assets/Language/reactjs/reactjs.svg';
import python from './assets/Language/python/python.svg';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

function Skill() {
    const [hoverState, setHoverState] = useState({
        html: false,
        css: false,
        js: false,
        reactjs: false,
        nodejs: false,
        python: false,
        pygame: false,
        kivy: false,
        kivymd: false
    });

    const [selectedSkill, setSelectedSkill] = useState(null);

    const skillInfo = {
        html: "HTML (HyperText Markup Language) is the standard language for creating webpages and web applications.",
        css: "CSS (Cascading Style Sheets) is used for describing the presentation of a document written in HTML or XML.",
        js: "JavaScript is a dynamic programming language used for web development, making webpages interactive.",
        reactjs: "ReactJS is a JavaScript library for building user interfaces, particularly for single-page applications.",
        nodejs: "Node.js is a runtime environment that allows you to run JavaScript code on the server side.",
        python: "Python is a high-level, interpreted programming language known for its simplicity and versatility.",
        pygame: "Pygame is a set of Python modules designed for writing video games.",
        kivy: "Kivy is an open-source Python library for developing multitouch applications, including games and apps for mobile devices.",
        kivymd: "KivyMD is a collection of Material Design components for use with Kivy, for more modern UI designs."
    };

    const handleHover = (skill) => {
        setHoverState((prevState) => ({
            ...prevState,
            [skill]: !prevState[skill]
        }));
    };

    const handleImageClick = (skill) => {
        setSelectedSkill(skill);
    };

    const closeInfo = () => {
        setSelectedSkill(null);
    };

    return (
        <>
            <Header />
            <div className={`skills-parent`}>
                <div className='skills-container'>
                    <div className='item-1'>
                        <div className="image-container">
                            <img
                                src={html}
                                alt="HTML"
                                className={`item ${hoverState.html ? "hovered" : ""}`}
                                onMouseEnter={() => handleHover('html')}
                                onMouseLeave={() => handleHover('html')}
                                onClick={() => handleImageClick('html')}
                            />
                            {hoverState.html && <span className="image-title">HTML</span>}
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={css}
                                alt="CSS"
                                className={`item ${hoverState.css ? "hovered" : ""}`}
                                onMouseEnter={() => handleHover('css')}
                                onMouseLeave={() => handleHover('css')}
                                onClick={() => handleImageClick('css')}
                            />
                            {hoverState.css && <span className="image-title">CSS</span>}
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={js}
                                alt="JavaScript"
                                className={`item ${hoverState.js ? "hovered" : ""}`}
                                onMouseEnter={() => handleHover('js')}
                                onMouseLeave={() => handleHover('js')}
                                onClick={() => handleImageClick('js')}
                            />
                            {hoverState.js && <span className="image-title">JavaScript</span>}
                        </div>
                    </div>

                    <div className="bottom-line"></div>

                    <div className="item-2">
                        <div className="image-container">
                            <img
                                src={reactjs}
                                alt="ReactJS"
                                className={`item ${hoverState.reactjs ? "hovered" : ""}`}
                                onMouseEnter={() => handleHover('reactjs')}
                                onMouseLeave={() => handleHover('reactjs')}
                                onClick={() => handleImageClick('reactjs')}
                            />
                            {hoverState.reactjs && <span className="image-title">ReactJS</span>}
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={nodejs}
                                alt="NodeJS"
                                className={`item ${hoverState.nodejs ? "hovered" : ""}`}
                                onMouseEnter={() => handleHover('nodejs')}
                                onMouseLeave={() => handleHover('nodejs')}
                                onClick={() => handleImageClick('nodejs')}
                            />
                            {hoverState.nodejs && <span className="image-title">NodeJS</span>}
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={python}
                                alt="Python"
                                className={`item ${hoverState.python ? "hovered" : ""}`}
                                onMouseEnter={() => handleHover('python')}
                                onMouseLeave={() => handleHover('python')}
                                onClick={() => handleImageClick('python')}
                            />
                            {hoverState.python && <span className="image-title">Python</span>}
                        </div>
                    </div>

                    <div className="bottom-line"></div>

                    <div className="item-3">
                        <div className="image-container">
                            <img
                                src={pygame}
                                alt="Pygame"
                                className={`item ${hoverState.pygame ? "hovered" : ""}`}
                                onMouseEnter={() => handleHover('pygame')}
                                onMouseLeave={() => handleHover('pygame')}
                                onClick={() => handleImageClick('pygame')}
                            />
                            {hoverState.pygame && <span className="image-title">Pygame</span>}
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={kivy}
                                alt="Kivy"
                                className={`item ${hoverState.kivy ? "hovered" : ""}`}
                                onMouseEnter={() => handleHover('kivy')}
                                onMouseLeave={() => handleHover('kivy')}
                                onClick={() => handleImageClick('kivy')}
                            />
                            {hoverState.kivy && <span className="image-title">Kivy</span>}
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={kivymd}
                                alt="Kivymd"
                                className={`item ${hoverState.kivymd ? "hovered" : ""}`}
                                onMouseEnter={() => handleHover('kivymd')}
                                onMouseLeave={() => handleHover('kivymd')}
                                onClick={() => handleImageClick('kivymd')}
                            />
                            {hoverState.kivymd && <span className="image-title">Kivymd</span>}
                        </div>
                    </div>
                </div>

                {selectedSkill && (
                    <div className='info-menu'>
                        <div className="info-header">
                            <h2>{selectedSkill} Information</h2>
                            <button onClick={closeInfo}><IoClose /></button>
                        </div>
                        <div className="info-body">
                            <p>{skillInfo[selectedSkill]}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Skill;
