import React from 'react';

import WebIcono from '../../../assets/web-icono.png';
import MobileIcono from '../../../assets/mobile-icono.png';
import BackendIcono from '../../../assets/backen-icono.png';

import "./skill_section.css";

const SkillsSection = () => {
    return (
        <div className="skill_section_container">
            <h2>Skills</h2>
            <hr/>
            <section className="skill_section">
                <article>
                    <img src={WebIcono} alt="Web icon" />
                    <h3>Front-end</h3>
                    <p>
                        Build web applications
                    <br/>
                        with <strong> React SJ </strong> and <strong> Angular</strong>
                    </p>
                </article>
                <article>
                    <img src={MobileIcono} alt="Mobile icon" />
                    <h3>Mobile Apps</h3>
                    <p>
                    Build your app for <strong> Android </strong>
                    <br/>
                    and <strong> iOS </strong> with <strong> Flutter</strong>.
                    </p>
                </article>
                <article>
                    <img src={BackendIcono} alt="Backend icon" />
                    <h3>Back-end</h3>
                    <p>
                    Build your app for <strong> Android </strong>
                    <br/>
                    and <strong> iOS </strong> with <strong> Flutter</strong>.
                    </p>
                </article>
            </section>
        </div>
    );
}

export default SkillsSection;
