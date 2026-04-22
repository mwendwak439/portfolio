import photo from '../images/Developer Frontend Developer Pin.jpeg'


 import { useState } from 'react';

function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skills = [
        {
            id: 1,
            name: 'HTML5',
            level: '90%',
            emoji: '🌐',
            color: '#E44D26',
            description: 'Semantic HTML, Accessibility, SEO friendly structure'
        },
        {
            id: 2,
            name: 'CSS3',
            level: '85%',
            emoji: '🎨',
            color: '#264DE4',
            description: 'Flexbox, Grid, Animations, Responsive Design'
        },
        {
            id: 3,
            name: 'JavaScript',
            level: '80%',
            emoji: '⚡',
            color: '#F7DF1E',
            description: 'ES6+, Async/Await, DOM Manipulation, APIs'
        },
        {
            id: 4,
            name: 'React',
            level: '75%',
            emoji: '⚛️',
            color: '#61DAFB',
            description: 'Hooks, Context API, Router, State Management'
        },
        {
            id: 5,
            name: 'SQL',
            level: '70%',
            emoji: '🗄️',
            color: '#4479A1',
            description: 'Joins, Subqueries, Database Design'
        },
        {
            id: 6,
            name: 'PHP',
            level: '65%',
            emoji: '🐘',
            color: '#777BB4',
            description: 'OOP, MVC, REST APIs, Authentication'
        }
    ];

    return (
        <div className="skills-container">
            <div className="skills-header">
                <h1 className="skills-title">
                    My <span className="title-highlight">Skills</span>
                </h1>
                <p className="skills-subtitle">
                    Technologies I work with to bring ideas to life
                </p>
                <div className="title-underline"></div>
            </div>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div 
                        key={skill.id}
                        className={`skill-card ${hoveredSkill === skill.id ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredSkill(skill.id)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="skill-emoji">{skill.emoji}</div>
                        <h3 className="skill-name">{skill.name}</h3>
                        
                        <div className="skill-level-bar">
                            <div 
                                className="skill-level-fill"
                                style={{ 
                                    width: hoveredSkill === skill.id ? skill.level : '0%',
                                    backgroundColor: skill.color
                                }}
                            >
                                <span className="skill-percentage">{skill.level}</span>
                            </div>
                        </div>
                        
                        <p className="skill-description">{skill.description}</p>
                        
                        <div className="skill-stats">
                            <div className="stat">
                                <span className="stat-number">{skill.level}</span>
                                <span className="stat-label">Proficiency</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
    
   


 