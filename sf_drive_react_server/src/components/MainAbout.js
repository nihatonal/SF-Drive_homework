import * as React from "react";

import "../styles/MainAbout.css";

import SectionAbout from "./SectionAbout";
import SectionContact from "./SectionContact";
import SectionTeam from "./SectionTeam";

function MainAbout() {
    return (
        <>
            <SectionAbout/>
            <SectionContact/>
            <SectionTeam/>
        </>
    );
}

export default MainAbout;