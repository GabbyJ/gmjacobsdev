import React from "react";
import { DiJqueryLogo, DiVisualstudio } from "react-icons/di";


function SkillsTab() {
    return(
        <div className="tab1-c">
            <table width="100%" border={0} cellSpacing={30}>
                <tbody>
                <tr>
                    <td><span><i className="fab fa-html5" aria-hidden="true" /></span> HTML</td>
                    <td aria-label="Bootstrap"><span><i className="fab fa-bootstrap" aria-hidden="true" /></span> Bootstrap</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-css3-alt" aria-hidden="true" /></span> CSS</td>
                    <td><span><i className="fab fa-sass" aria-hidden="true" /></span> SASS</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-js" aria-hidden="true" /></span> Javascript</td>
                    <td><span><DiJqueryLogo className="DiLogo" aria-hidden="true"/></span> jQuery</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-react" aria-hidden="true" /></span> React</td>
                    <td><span><i className="fab fa-node" aria-hidden="true" /></span> Node</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-python" aria-hidden="true" /></span> Python</td>
                    <td><span><i className="fab fa-wordpress" aria-hidden="true" /></span> WordPress</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-github" aria-hidden="true" /></span> Git/Github</td>
                    <td><span><i className="fab fa-adobe" aria-hidden="true" /></span> Adobe Creative Suite</td>
                </tr>
                <tr>
                    <td><span><i className="fas fa-terminal" aria-hidden="true"></i></span> Command Line</td>
                    <td><span><DiVisualstudio className="DiLogo" aria-hidden="true"/></span> Visual Studio Code</td>
                </tr>
                <tr>
                    <td><span><img src="./images/responsive.png" alt="phone, tablet, computer icon" className="DiLogo" aria-hidden="true"/></span> Responsive Websites</td>
                    <td><span><img src="./images/w3c.png" alt="W3C icon" className="DiLogo" aria-hidden="true"/></span> Web Accessibility</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SkillsTab;