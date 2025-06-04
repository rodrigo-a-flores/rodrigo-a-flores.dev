import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="navbar">
                <ul className='logo'>
                    <Link to="/">Rodrigo.dev <FaCode/></Link>
                </ul>
                <ul className='links'>
                    <Link to="/">Inicio</Link>
                    <Link to="/projects">Proyectos</Link>
                    <Link to="/contact">Contacto</Link>
                </ul>
            </nav>
            <nav className='navbar-mobile'>                          
                <ul>
                    <Link to="/">Rodrigo.dev <FaCode /></Link>
                </ul>
                <ul>
                    <GiHamburgerMenu onClick={toggleMenu}/>
                </ul>
                <ul className={isOpen ? 'links-mobile' : 'links-mobile active'}>                    
                    <Link to="/">Inicio</Link>
                    <Link to="/projects">Proyectos</Link>
                    <Link to="/contact">Contacto</Link>
                </ul>
            </nav>
        </>
        
    );
}

export default Navbar;
