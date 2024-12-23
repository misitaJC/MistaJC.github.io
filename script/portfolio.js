const backgrounds = ['./images/background.png'];
const quotes = ["My Portfolio"];

document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = ['./images/background.png'];
    const quotes = ["My Portfolio"];
    const bgImage = document.getElementById('bgImage');
    bgImage.src = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    const quoteContainer = document.getElementById('randomQuote');
    quotes.forEach((quote, index) => {
        const p = document.createElement('p'); 
        p.textContent = quote; 
        if (index < quotes.length - 1) { 
            p.style.marginBottom = '10px'; 
        }
        quoteContainer.appendChild(p);
    });

    const showcase = document.querySelector('.portfolio-showcase');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.demoUrl}" class="btn">Live Demo</a>
            <a href="${project.codeUrl}" class="btn">Source Code</a>
        `;
        showcase.appendChild(projectDiv);
    });
});