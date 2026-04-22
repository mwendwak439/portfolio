import pic from '../images/Developer Frontend Developer Pin.jpeg';

function About() {
    return (
        <>
            <h1 className='about-h1'>About <span className='highlight'>Me</span></h1>
            <div className='about-section'>
                <div className='about-content'>
                    <div className='about-text'>
                        <p className='quote'>
                            "I'm an opportunistic beginner front end developer who recently discovered the magic of turning ideas into websites. While I'm early in my journey, I've already built some projects and I'm obsessed with writing clean code and learning something new every day. I'm actively looking for an opportunity to contribute, grow, and solve real problems. Let's build something together."
                        </p>
                        
                        <p className='passion'>
                            "I realized my true passion was creating things on the web. I've spent the last year learning HTML, CSS, and JavaScript and I've never looked back."
                        </p>
                        
                        <p className='self-taught'>
                            I am a self-taught CSS developer who loves solving problems with code. I've completed several projects and I'm most proud of building real-world applications. I'm looking for my first role where I can learn from experienced developers while contributing real value. I bring curiosity, grit, and a willingness to ask "why" until I understand.
                        </p>
                        
                        <div className='info-grid'>
                            <div className='info-card'>
                                <h4>📚 Currently</h4>
                                <p>Deep diving into React</p>
                            </div>
                            <div className='info-card'>
                                <h4>🎯 Goals</h4>
                                <p>Land my first junior dev role by June</p>
                            </div>
                            <div className='info-card'>
                                <h4>🧠 Mindset</h4>
                                <p>I don't know everything - but I know how to learn it</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='about-image-container'>
                        <img src={pic} alt="about img" className='about-image' />
                        <div className='image-overlay'>
                            <span>💻 Code with passion</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;