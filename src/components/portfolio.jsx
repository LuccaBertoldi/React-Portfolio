import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Starter Portofolio',
            image: '../src/assets/project1.jpeg',
            demoLink: 'https://luccabertoldi.github.io/Moldule-02-Challenge/',
            repoLink: 'https://github.com/LuccaBertoldi/Moldule-02-Challenge/tree/main'
        },
        
        {
            title: 'Weather App JS',
            image: '../src/assets/project2.jpg',
            demoLink: 'https://luccabertoldi.github.io/Module-06-Challenge/',
            repoLink: 'https://github.com/LuccaBertoldi/Module-06-Challenge'
        },
        
        {
            title: 'Diet Tracker App',
            image: '../src/assets/project3.png',
            demoLink: 'https://yourdemo1.com',
            repoLink: 'https://github.com/Kimiko-Dixon/Food_Tracker'
        },

        {
            title: 'Fitness Lab',
            image: '../src/assets/project4.jpg',
            demoLink: 'https://zainabid333.github.io/Fitness-lab/',
            repoLink: 'https://github.com/zainabid333/Fitness-lab'
        },

    

    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div class="portfolio">
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <a href={project.demoLink}>
                            <img src={project.image} alt={project.title}  />
                        </a>
                        <a href={project.repoLink}>View Code</a>
                    </div>
                ))}
            </div>

            
        </section>
    );
};

export default Portfolio;