import React, { useEffect, useState } from 'react';
import './Nav.css';


function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    const netflixLogo ='https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo-700x189.png';
    const netflixAvatar = 'https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg';
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src={netflixLogo}
                alt='Netflix Logo'
            />

            <img  
                className='nav__avatar'
                src={netflixAvatar}
                alt='Netflix Avatar' />
            
        </div>
    )
}

export default Nav
