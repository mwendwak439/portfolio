
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        
    };

    
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="navbar">
                <h1>Portfolio</h1>
                
              
                <div className="hamburgerbtn" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
           
            <nav className={`navmenu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
                    <li><Link to="/project" onClick={closeMenu}>Project</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>
             </div>
        </>
    );
}

export default Nav;