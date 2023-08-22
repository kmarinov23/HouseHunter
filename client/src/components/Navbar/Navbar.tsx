import { useEffect, useState } from 'react';
import logo from "../../logo.png"

function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            <div className="logo">
                <img src={logo} alt="Real Estate Logo" />
            </div>
            <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Agents</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;