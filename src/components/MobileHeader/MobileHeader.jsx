import './MobileHeader.scss';
import NavLinks from '../NavLinks/NavLinks';
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';


const MobileHeader = () => {

    const [click, setClick] = useState(false);

    const Hamburger = <CiMenuBurger className="hamburger-menu"
            onClick={() => setClick(!click)} />

    const Close = <IoIosClose className="close-menu"
            onClick={() => setClick(!click)} />

    const closeMenu = () => setClick(false);

    return (
        <>
            <header className="mobile-header">
                <nav className="mobile-header__menu">
                    { click ? Close : Hamburger} 
                    {click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
                </nav>
            </header>

        </>
    )

}

export default MobileHeader; 