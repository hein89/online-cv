document.addEventListener("DOMContentLoaded", () => {
    const skillCategories = document.querySelectorAll(".skill-category");

    skillCategories.forEach(category => {
        category.addEventListener("click", () => {
            category.classList.toggle("active"); // Toggle öffnet/schließt Inhalt
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const careerStep = document.querySelectorAll(".timeline-content");

    careerStep.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("active"); // Toggle öffnet/schließt Inhalt
        });
    });
});
