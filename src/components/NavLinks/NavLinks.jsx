import './NavLinks.scss';
import { NavLink } from 'react-router-dom';


const NavLinks = ({isClicked, closeMenu}) => {  

    return (
        <div className="nav">
            <ul className="nav__menu-list">
                <NavLink onClick={() => isClicked && closeMenu()} className={({ isActive }) => isActive ? "nav__link--active" : "nav__link"} to={`/`}>Home</NavLink>
                <NavLink onClick={() => isClicked && closeMenu()} className={({ isActive }) => isActive ? "nav__link--active" : "nav__link"} to={`/about`}>About</NavLink>
                <NavLink onClick={() => isClicked && closeMenu()} className={({ isActive }) => isActive ? "nav__link--active" : "nav__link"} to={`/projects`}>Projects</NavLink>
                <NavLink onClick={() => isClicked && closeMenu()} className={({ isActive }) => isActive ? "nav__link--active" : "nav__link"} to={`/contact`}>Contact</NavLink>
            </ul>
        </div>
    )

}

export default NavLinks; 