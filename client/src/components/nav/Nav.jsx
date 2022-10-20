import React, { useContext } from 'react';
import './style.css';
import Logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { UserContext } from '../../context/UserContext';


function Nav() {
  const { user, setUser } = useContext(UserContext);
  
  const navigate = useNavigate();

  const signOut = (event) => {
    event.preventDefault();
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    navigate('../', { replace: true });
  };

  return (
    <nav className='nav__container'>
      <div className='nav__logo__container'>
        <Link to='/'>
          <img src={Logo} alt='Matched Betting' />
        </Link>
      </div>

      <div className='nav__links__container'>
        <Link to='/'>Home</Link>
        <Link to='/calculator'>Calculator</Link>
        <Link to='/lessons'>Lessons</Link>
        <Link to='/forum'>Forum</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/links'>Links</Link>
      </div>

      {/* EVENTUALLY MAKE THESE CONDITION SO ONLY ONE IS SHOWN */}
      <div className='nav__user__features'>
        <div className='login__container'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/account'><AccountCircleIcon /></Link>
          <Link to='/home' onClick={signOut}>Sign Out</Link>

        </div>

        {/* <div className="register__container">
        </div> */}

        {/* ADD LOGOUT */}
      </div>
    </nav>
  );
}

export default Nav;
