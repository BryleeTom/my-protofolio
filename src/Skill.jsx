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
                                className="item"
                                onClick={() => handleImageClick('html')}
                            />
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={css}
                                alt="CSS"
                                className="item"
                                onClick={() => handleImageClick('css')}
                            />
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={js}
                                alt="JavaScript"
                                className="item"
                                onClick={() => handleImageClick('js')}
                            />
                        </div>
                    </div>

                    <div className="bottom-line"></div>

                    <div className="item-2">
                        <div className="image-container">
                            <img
                                src={reactjs}
                                alt="ReactJS"
                                className="item"
                                onClick={() => handleImageClick('reactjs')}
                            />
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={nodejs}
                                alt="NodeJS"
                                className="item"
                                onClick={() => handleImageClick('nodejs')}
                            />
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={python}
                                alt="Python"
                                className="item"
                                onClick={() => handleImageClick('python')}
                            />
                        </div>
                    </div>

                    <div className="bottom-line"></div>

                    <div className="item-3">
                        <div className="image-container">
                            <img
                                src={pygame}
                                alt="Pygame"
                                className="item"
                                onClick={() => handleImageClick('pygame')}
                            />
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={kivy}
                                alt="Kivy"
                                className="item"
                                onClick={() => handleImageClick('kivy')}
                            />
                        </div>
                        <div className="vertical-line"></div>

                        <div className="image-container">
                            <img
                                src={kivymd}
                                alt="Kivymd"
                                className="item"
                                onClick={() => handleImageClick('kivymd')}
                            />
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
