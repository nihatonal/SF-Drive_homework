import * as React from "react";

import "../styles/Main.css";

import SectionAbout from "./SectionAbout";
import SectionContact from "./SectionContact";
import SectionTeam from "./SectionTeam";

function Main() {
    return (
        <>
            <SectionAbout/>
            <SectionContact/>
            <SectionTeam/>
        </>
    );
}

export default Main;