import React from "react";
import {FaReact, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare} from "react-icons/fa";
import {SiCplusplus, SiGnubash} from "react-icons/si";


function SkillsComponent() {
    return (
        <div className="skills_section">
             <div className="skill_component">
                <FaJava className="skill_icon"></FaJava>
                <h3> Java </h3>
                <p> </p>
            </div>
            <div className="skill_component">
                <FaPython className="skill_icon"></FaPython>
                <h3> Python </h3>
                <p> </p>
            </div>
            <div className="skill_component">
                <SiCplusplus className="skill_icon"></SiCplusplus>
                <h3> C </h3>
                <p> </p>
            </div>
            <div className="skill_component">
                <FaHtml5 className="skill_icon"></FaHtml5>
                <h3> HTML </h3>
                <p> </p>
            </div>
            <div className="skill_component">
                <FaCss3Alt className="skill_icon"></FaCss3Alt>
                <h3> CSS </h3>
                <p> </p>
            </div>
            <div className="skill_component">
                <FaJsSquare className="skill_icon"></FaJsSquare>
                <h3> JavaScript </h3>
                <p> </p>
            </div>
            <div className="skill_component">
                <FaGitAlt className="skill_icon"></FaGitAlt>
                <h3> Git </h3>
                <p> </p>
            </div>
            <div className="skill_component">
                <FaReact className="skill_icon"></FaReact>
                <h3> React </h3>
                <p> </p>
            </div>
            <div className="skill_component">
                <SiGnubash className="skill_icon"></SiGnubash>
                <h3> Bash </h3>
                <p> </p>
            </div>
        </div>
    )
}

export default SkillsComponent;