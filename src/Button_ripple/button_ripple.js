import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useClickAnimation } from '../useClickAnimation';

import './button_ripple.modules.scss';


const Button_ripple = ({onClick}) => {

    const buttonRef = useRef();
    useClickAnimation(buttonRef, {});
    
    // const handleCheckout = () => {
    //     console.log(object);
    // }

    return (
        <>
        
            <div className="button-container" ref={buttonRef}>
                <button className="btn btn_white" onClick={(event) => onClick(event)}>BUY NOW</button>
            </div>
        </>

    );
}

export default Button_ripple;