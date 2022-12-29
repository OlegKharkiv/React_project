import { useState } from 'react';
import './product-card.modules.scss';
import ButtonRipple from '../../Button_ripple/button_ripple';

import NailsFrench from '../images_01/jodene-isakowitz-hvqHtZqNMeI-unsplash.jpg';
import NailsManicure from '../images_01/jodene-isakowitz-hvqHtZqNMeI-unsplash.jpg';
import NailsRed from '../images_01/jodene-isakowitz-hvqHtZqNMeI-unsplash.jpg';
import StripeContainer from '../StripeContainer';


function ProductCard() { 
    const [showItem, setShowItem] = useState(false);

    
    return (
            <div className="bestsellers">
                    <h2 className="title">Our offer</h2>
                    <div className="our-best">
                        <div className="our-best-container">
                            <div className="card__item">
                                <img src={NailsFrench} alt="The screen of the white french nails" />
                                <h3 className="card__item-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt.</h3>
                                <div className="card__item-price">
                                    <span>FREE</span>
                                </div>
                                <div className="btn__wrapper">
                                    <ButtonRipple/>
                                </div>
                            </div>
                            <div className="card__item">
                                <img src={NailsManicure} alt="The screen of the manicure in progress" />
                                <h3 className="card__item-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, harum!</h3>
                                <div className="card__item-price">
                                    <span>4.99&#163;</span>
                                </div>
                                <div className="btn__wrapper">
                                    <ButtonRipple/>
                                </div>
                            </div>
                            {showItem ? (
                                        <StripeContainer /> 
                                        ) : (
                                            <>
                                                <div className="card__item">
                                                    <img src={NailsRed} alt="The screen of the red polish nails" />
                                                    <h3 className="card__item-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, inventore.</h3>
                                                    <div className="card__item-price">
                                                        <span>7.99&#163;</span>
                                                    </div>
                                                    <div className="btn__wrapper">
                                                        <ButtonRipple onClick={() => setShowItem(true)}/>
                                                    </div>
                                                </div>
                                            </>
                            )}
                        </div>
                    </div>
                </div>
        )
}

export default ProductCard;