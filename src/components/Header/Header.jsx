import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {

    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //     const scrollTop = window.scrollY;

    //     setIsScrolled(scrollTop > 0);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div className='fixed'>

            <header className="header">
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <NavLink className={({ isActive }) => isActive ? "header__link--active" : "header__link"} to={`/`}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "header__link--active" : "header__link"} to={`/about`}>About</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "header__link--active" : "header__link"} to={`/projects`}>Projects</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "header__link--active" : "header__link"} to={`/contact`}>Contact</NavLink>
                    </ul>
                </nav>
            </header>

        </div>
    )

}

export default Header; 