import React from 'react';

const Resume = () => {
    return (
        <section class="resume">
            <h2>Resume</h2>
            <a href="path-to-your-resume.pdf" download>Download Resume</a>
            <ul>
                <h3>Front-End Proficiencies</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Designs</li>
                <li>React</li>
                <li>Bootstrap</li>

                <h3>Back-End Proficiencies</h3>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MYSQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>Rest</li>
                <li>GraphQL</li>
            </ul>
        </section>
    );
};

export default Resume;