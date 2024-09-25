import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header-container">

            <header className="header">
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li>
                            <Link className="header__link" to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link className="header__link" to={`/about`}>About</Link>
                        </li>
                        <li>
                            <Link className="header__link" to={`/projects`}>Projects</Link>
                        </li>
                        <li>
                            <Link className="header__link" to={`/contact`}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )

}

export default Header; 