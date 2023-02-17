import Head from "next/head";
import React from "react";

import { Header } from "../components/header";
import { Principal } from "../components/sections/main";
import { Skills } from "../components/sections/skills";
import {ListTechnologies} from "../components/sections/ListTechnologies";
import { ContactBanner } from "../components/contactBanner";
import { Projects } from "../components/projects/Projects";
import {PersonalBlog} from "../components/personalblog";

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Developer</title>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="/assets/favicon.ico"
                ></link>
            </Head>
            <Header />
            <Principal />
            <Skills />
            <ListTechnologies />
            <ContactBanner />
            <Projects />
            <PersonalBlog />
        </>
    );
};

export default HomePage;
