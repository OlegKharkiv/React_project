import React, { useState, useEffect } from 'react';
import './app-info.modules.scss';
import images from '../../Components/images_01/exels-shonejai-1227511.jpg';
// import AnimationOnScroll from '../services/service_script';


const AppInfo = (props) => {
    const {diplomas, increased} = props;

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
                onClick={Clicking}>Kysil Oleg</h1>
                    <div className="fullscreen__text _anim-items _anim-no-hide _active">
                        <h5>Education Diploma: {diplomas}</h5>
                        <h5>Courses certificate: {increased} </h5>
                    </div>
            </div>
            <div className="fullscreen__image">
                <img src={images} alt=""/>
            </div>
        </div>
    )
}

export default AppInfo;