import React from 'react';

import JoseGaldamez from '../../../assets/jose-galdamez.png';
import './principal_section.css';

const PrincipalSection = () => {
    return (
        <section>
            <div className="principal_section">
                <img src={JoseGaldamez} alt="José Galdámez" />
                <h1>José Galdámez</h1>
                <p>Web and Mobile Developer</p>
                <div className="principal_buttons">
                    <button>Download CV</button>
                    <button>Contact</button>
                </div>
            </div>
        </section>
    );
}

export default PrincipalSection;
