import React, {Component} from "react";

class TypingEffect extends Component {
    componentDidMount() {
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        const textArray = ["Web Producer", "Front End Developer", "Multimedia Creator"];
        const typingDelay = 100;
        const erasingDelay = 75;
        const newTextDelay = 500; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay);
            }
        }

        document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
            if (textArray.length) setTimeout(type, newTextDelay + 250);
        });

    }

    render() {
        return (
            <div className="typingEffect">
                <h1 className="name" data-aos="fade-up" data-aos-duration="1000"> Hey, I'm Gabrielle Jacobs</h1>
                <p className="tagline" data-aos="fade-up" data-aos-duration="1000"><span className="typed-text"/><span className="cursor">&nbsp;</span></p>
            </div>
        );
    }
}


export default TypingEffect;
