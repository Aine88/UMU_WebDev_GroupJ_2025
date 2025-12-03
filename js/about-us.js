// script.js
const text = "Welcome to Our Team! We innovate, inspire, and impact.";
const target = document.getElementById("about-text");

let words = text.split(" "); // split into words
let i = 0;

function typeWord() {
    if (i < words.length) {
        const span = document.createElement("span");
        span.textContent = words[i] + " ";
        span.style.opacity = 0;
        span.style.transition = "opacity 0.8s ease-in-out";
        target.appendChild(span);

        // fade in effect
        setTimeout(() => {
            span.style.opacity = 1;
        }, 100);

        i++;
        setTimeout(typeWord, 300); // delay between words
    }
}

window.onload = typeWord;