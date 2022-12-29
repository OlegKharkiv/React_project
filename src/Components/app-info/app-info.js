import React, { useState, useEffect } from 'react';
import './app-info.modules.scss';
import images from '../../Components/images_01/pexels-brigitte-tohm-239576.jpg';
// import AnimationOnScroll from '../services/service_script';

import ButtonRipple from '../../Button_ripple/button_ripple';


const AppInfo = (props) => {

    let [Clicked, setState] = useState(false)
    
    const Clicking = () => {
        setState(!Clicked)
    }

    useEffect(() => {
        if (Clicked) setTimeout(() => setState(false), 2500)
    }, [Clicked])
    
    return (
        <div className="app-info">
            <div className="fullscreen__content">
                <h1 className={Clicked ? 'tracking-out-expand-fwd-bottom' : 'fullscreen__title _anim-items _anim-no-hide _active'}
                onClick={Clicking}>The pure formula for nail technics masters</h1>
                    <div className="fullscreen__text _anim-items _anim-no-hide _active">
                        <div className="our-best-container">
                            <div className="card__item">
                                <div className="card__item-title">Top ways to boost your nails technic skills</div>
                                <div className="card__item-about">
                                    <div className="card__item-subtitle">PDF files on how to make ideal nails</div>
                                    <div className="card__item-subtitle">Access immediately after purchase</div>
                                </div>
                                <div className="btn__wrapper">
                                        <>
                                            <ButtonRipple/>
                                        </>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="fullscreen__image">
                <img src={images} alt="Hands with red nails holding a ball"/>
            </div>
        </div>
    )
}

export default AppInfo;