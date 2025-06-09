document.addEventListener("DOMContentLoaded", () => {
    const skillCategories = document.querySelectorAll(".skill-category");

    skillCategories.forEach(category => {
        category.addEventListener("click", () => {
            category.classList.toggle("active"); // Toggle öffnet/schließt Inhalt
        });
    });
});
