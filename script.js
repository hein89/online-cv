document.addEventListener('DOMContentLoaded', () => {
    // Skill Data
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

    // Find UL element in the HTML file
    const skillsList = document.getElementById('skills-list');

    // Dynamically add list items
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

});
