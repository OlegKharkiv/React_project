import { Link } from 'react-router-dom';

import './footer.modules.scss';

import Logo from '../Components/images/Group_beans_black.svg';
import CoffeeBeansBlack from "../Components/images/Group_black.svg";

const Footer = () => {

    return (
        <>
            <div className="wrapper">
                <div className="footer">
                    <div className="footer__logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <nav className="footer__links">
                        <Link to="/" className="footer__link">Coffee house</Link>
                        <Link to="/Our coffee" className="footer__link">Our coffee</Link>
                        <Link to="/Goods page" className="footer__link">For your pleasure</Link>
                    </nav>
                </div>
                <div className="wrapper__footer__beans-logo">
                    <div className="footer__beans-logo">
                        <img className="footer__beans-logo-screen" src={CoffeeBeansBlack} alt="Coffee_beans" />
                    </div>
                </div>
            </div> 
        </>

    );
}

export default Footer;