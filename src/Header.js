import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header>
                <h1>
                    <a href="#" className='text-small'>&nbsp; Antioch Grace Ministries</a>
                </h1>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="#">Ministries</Link>
                    <Link to="#">Events</Link>
                    <Link to="#">Contacts</Link>
                </nav>
            </header>
        </>
    );
}
