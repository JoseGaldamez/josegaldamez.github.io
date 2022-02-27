import React from 'react';
import Header from '../common/Header/Header';
import PrincipalSection from '../sections/PrincipalSection/PrincipalSection';
import SkillsSection from '../sections/SkilsSection/SkillsSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <PrincipalSection />
                <SkillsSection />
            </main>
            <footer>Footer</footer>
        </>
    );
}

export default HomePage;
