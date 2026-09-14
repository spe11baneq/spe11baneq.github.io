// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(11, 11, 13, 0.95)";
    } else {
        navbar.style.background = "rgba(11, 11, 13, 0.85)";
    }

});


// =========================================
// PROJECT IMAGE FALLBACK
// =========================================

const images = document.querySelectorAll("img");

images.forEach((image) => {

    image.addEventListener("error", () => {

        image.src = "assets/placeholder.jpg";

    });

});


// =========================================
// FADE-IN ANIMATION
// =========================================

const elements = document.querySelectorAll(
    ".project-card, .skill, .about-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


elements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});
