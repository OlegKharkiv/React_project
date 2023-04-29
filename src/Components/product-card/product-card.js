
import './product-card.modules.scss';
import ButtonRipple from '../../Button_ripple/button_ripple';
import '@stripe/react-stripe-js';

import NailsFrench from '../images_01/jodene-isakowitz-hvqHtZqNMeI-unsplash.jpg';
import NailsManicure from '../images_01/jodene-isakowitz-hvqHtZqNMeI-unsplash.jpg';
import NailsRed from '../images_01/jodene-isakowitz-hvqHtZqNMeI-unsplash.jpg';

import { useNavigate } from "react-router-dom";



function ProductCard() { 
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/payment`; 
    navigate(path);
  }

    
    return (
            <div className="bestsellers">
                    <h2 className="title__container">Our offer</h2>
                    <div className="our-best">
                        <div className="our-best-container">
                            <div className="card__item">
                                <img src={NailsFrench} alt="The screen of the white french nails" />
                                <h3 className="card__item-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt.</h3>
                                <div className="card__item-price">
                                    <span>FREE</span>
                                </div>
                                <div className="btn__wrapper">
                                    <ButtonRipple />
                                </div>
                            </div>
                            <div className="card__item">
                                <img src={NailsManicure} alt="The screen of the manicure in progress" />
                                <h3 className="card__item-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, harum!</h3>
                                <div className="card__item-price">
                                    <span>4.99&#163;</span>
                                </div>
                                <div className="btn__wrapper">
                                    <ButtonRipple onClick={() => routeChange() }/>
                                </div>
                            </div>
                            <div className="card__item">
                                <img src={NailsRed} alt="The screen of the red polish nails" />
                                <h3 className="card__item-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, inventore.</h3>
                                <div className="card__item-price">
                                    <span>7.99&#163;</span>
                                </div>
                                <div className="btn__wrapper">
                                    <ButtonRipple />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default ProductCard;