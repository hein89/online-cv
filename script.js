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

// JS-Logik zum Laden und Anwenden der Sprache

let currentLang = 'en';
let translations = {};

async function loadLanguage(lang) {
  const response = await fetch(`./lang/${lang}.json`);
  translations = await response.json();
  currentLang = lang;
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[key];
    if (text) el.textContent = text;
  });
}

// Sprachwechsel-Buttons
document.getElementById('lang-en').addEventListener('click', () => loadLanguage('en'));
document.getElementById('lang-de').addEventListener('click', () => loadLanguage('de'));

// Initiale Sprache laden
loadLanguage('en');
 
