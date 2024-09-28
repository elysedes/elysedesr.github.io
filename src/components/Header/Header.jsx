import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <>
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

        </>
    )

}

export default Header; 