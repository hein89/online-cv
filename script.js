document.addEventListener('DOMContentLoaded', () => {
    // Daten für die Skills
    const skills = [
        'Angular',
        'Java',
        'Spring Boot',
        'HTML5 & CSS3', 
        'JavaScript',
        'Database Systems & SQL', 
        'Git',
        'Containerization',
        'Scrum & Agile Development',
        'Business Informatics',
        'IT-Consulting',
        'Business Process Management'
    ];

    // UL-Element in der HTML-Datei finden
    const skillsList = document.getElementById('skills-list');

    // Dynamisch Listenelemente hinzufügen
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    console.log("Skills dynamisch aus JavaScript hinzugefügt!");

    /* ------ Später entfernen, gibt nur console logs aus wenn man drüber fährt --------- */
    const timelineItems = document.querySelectorAll('.timeline-content');

    timelineItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            console.log(`Du hast "${item.querySelector('h3').textContent}" berührt!`);
            // Hier könnte auch dynamisch Text oder eine Animation ausgelöst werden
        });

        item.addEventListener('mouseout', () => {
            console.log('Maus verlassen.');
        });
    });

    /* --------------------------------------------------------------------------------- */
});
