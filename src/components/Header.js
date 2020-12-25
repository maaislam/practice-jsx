import React, { useContext } from 'react';
import userContext from '../context/userContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { auth, setAuth } = useContext(userContext);
  const logout = () => {
    setAuth({
      token: undefined,
      user: undefined,
    });
    window.localStorage.setItem('auth-token', '');
  };
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Home
      </Link>
      <Link to='/YoutubeSearch' className='item'>
        Youtube Search
      </Link>
      <Link to='/imageSearchPage' className='item'>
        Image Search
      </Link>
      <Link to='/components' className='item'>
        Components
      </Link>
      <Link to='/translate' className='item'>
        Translate
      </Link>
      <Link to='/searchwiki' className='item'>
        Wiki Search
      </Link>
      {auth.token ? (
        <Link onClick={logout} to='/' className='item'>
          Logout
        </Link>
      ) : (
        <>
          <Link to='/auth/register' className='item'>
            Register
          </Link>
          <Link to='/auth/login' className='item'>
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
