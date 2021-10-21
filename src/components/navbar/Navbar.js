import React from 'react';
import "./navbar.css";


const Navbar = ({isScrolling}) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        
              //estos estilos para el scroll mediante el operador ternario
        <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
            <div className='navbar-logo' onClick={toTheTop}>Fernando</div>
        </nav>
   
    )
}

export default Navbar;
