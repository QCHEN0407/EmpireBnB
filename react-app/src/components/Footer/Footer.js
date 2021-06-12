import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdLanguage as LanguageIcon } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer__container">
            <div>© 2021 EmpireBnB</div>
            <div className="footer__links">
                <LanguageIcon id="language"/>
                <p>English (US)</p>
                <a href="https://github.com/QCHEN0407" style={{ textDecoration: "none" }}><p className="about__link">About the Developer</p></a>
                <a href="https://github.com/QCHEN0407/EmpireBnB">
                    <FaGithub id="github"/>
                </a>
                <a href="https://www.linkedin.com/in/qingweichen/">
                    <FaLinkedinIn id="linkedin"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
