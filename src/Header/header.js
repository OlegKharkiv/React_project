import { Link } from 'react-router-dom';

import './header.modules.scss';

import Logo from '../Components/images/Frame 1.svg';

const Header = () => {

    return (
        <>
            <div className="header">
                <div className="header__logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="header__links">
                    <Link to="/" className="header__link">Coffee house</Link>
                    <Link to="/Our coffee" className="header__link">Our coffee</Link>
                    <Link to="/Goods page" className="header__link">For your pleasure</Link>
                </nav>
            </div>
        </>

    );
}

export default Header;