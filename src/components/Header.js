import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import userContext from '../context/userContext';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  const { auth, setAuth } = useContext(userContext);
  const logout = () => {
    setAuth({
      token: undefined,
      user: undefined,
    });
    window.localStorage.setItem('auth-token', '');
    history.push('/');
  };
  return (
    <div className='ui secondary pointing menu'>
      <NavLink to='/' className='item' activeClassName='active' exact>
        Home
      </NavLink>
      <NavLink
        to='/YoutubeSearch'
        className={`item ${!auth.token ? 'disabled' : ''}`}
        activeClassName='active'
        exact
      >
        Youtube Search
      </NavLink>
      <NavLink
        to='/imageSearchPage'
        className={`item ${!auth.token ? 'disabled' : ''}`}
        activeClassName='active'
        exact
      >
        Image Search
      </NavLink>
      <NavLink
        to='/components'
        className={`item ${!auth.token ? 'disabled' : ''}`}
        activeClassName='active'
        exact
      >
        Components
      </NavLink>
      <NavLink
        to='/translate'
        className={`item ${!auth.token ? 'disabled' : ''}`}
        activeClassName='active'
        exact
      >
        Translate
      </NavLink>
      <NavLink
        to='/searchwiki'
        className={`item ${!auth.token ? 'disabled' : ''}`}
        activeClassName='active'
        exact
      >
        Wiki Search
      </NavLink>
      <div className='right menu'>
        {auth.token ? (
          <Link onClick={logout} className='item' exact>
            Logout
          </Link>
        ) : (
          <>
            <NavLink
              to='/auth/register'
              className='item'
              activeClassName='active'
              exact
            >
              Register
            </NavLink>
            <NavLink
              to='/auth/login'
              className='item'
              activeClassName='active'
              exact
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
