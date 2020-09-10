import React from "react";

function Footer() {
    return(
        <div>
            {/* FOOTER HR */}
            <div className="footer-hr">
                <hr className="line-top-footer" />
                <hr className="line-bottom-footer" />
            </div>
            {/* FOOTER */}
            <footer>
                <section className="footer" data-aos="fade-up" data-aos-duration="700">
                    <div className="footer-contact">
                        <img className="logo-footer" src="./images/gj-logo-orange.png" alt="Logo saying 'GJ' in curly brackets" />
                        <p>Live like no one else, so you can live like no one else.</p>
                    </div>
                    <div className="footer-socials">
                        <a href="https://github.com/GabbyJ" target="_blank" rel="noreferrer noopener" aria-label="Github"><i className="fab fa-github" title="Github" /></a>
                        <a href="https://www.linkedin.com/in/gabrielle-jacobs-9a890473" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><i className="fab fa-linkedin-in" title="LinkedIn" /></a>
                        <a href="sms:+1469-626-7843" target="_blank" rel="noreferrer noopener" aria-label="Call or Text"><i className="fas fa-mobile-alt" title="Call or Text" /></a>
                        <a href="#contact" rel="noreferrer noopener" aria-label="E-mail"><i className="fas fa-envelope" title="E-mail" /></a>
                    </div>
                    <hr />
                    <p className="made">Made with <i className="fas fa-heart" aria-label="love"></i> using&nbsp;<i className="fab fa-react" aria-label="React" title="React"></i></p>
                    <p className="copyright">© 2020 Gabrielle Jacobs</p>
                </section>
            </footer>
        </div>
    );
}

export default Footer;