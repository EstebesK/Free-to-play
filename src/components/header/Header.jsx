import React from 'react'
import { Link } from 'react-router-dom';

import './header.scss';
import logo from '../../assets/logo.png';

const Header = () => {

  const headerRef = React.useRef(null);


  React.useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);


  return (
    <div ref={headerRef} className='header'>
      <div className='header__wrapper'>
        <Link to='/'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header