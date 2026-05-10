// =======================
// SCROLL ANIMATION SETUP
// =======================
const sections = document.querySelectorAll('.section');

sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});


// =======================
// TYPING EFFECT
// =======================
const typingText = document.querySelector('.typing');
const words = ["Full Stack Web Developer", "Frontend Developer", "Backend Developer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return; // safety check

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.onclick = () => {
    navbar.classList.toggle("active");
};