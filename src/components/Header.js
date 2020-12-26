import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import userContext from '../context/userContext';
import { NavLink } from 'react-router-dom';

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
      {auth.token ? (
        <NavLink
          to='/YoutubeSearch'
          className={`item`}
          activeClassName='active'
          exact
        >
          Youtube Search
        </NavLink>
      ) : (
        <span className='item disabled'>Youtube Search</span>
      )}
      {auth.token ? (
        <NavLink
          to='/imageSearchPage'
          className={`item`}
          activeClassName='active'
          exact
        >
          Image Search
        </NavLink>
      ) : (
        <span className='item disabled'>Image Search</span>
      )}
      {auth.token ? (
        <NavLink
          to='/components'
          className={`item`}
          activeClassName='active'
          exact
        >
          Components
        </NavLink>
      ) : (
        <span className='item disabled'>Components</span>
      )}
      {auth.token ? (
        <NavLink
          to='/translate'
          className={`item`}
          activeClassName='active'
          exact
        >
          Translate
        </NavLink>
      ) : (
        <span className='item disabled'>Translate</span>
      )}
      {auth.token ? (
        <NavLink
          to='/searchwiki'
          className={`item`}
          activeClassName='active'
          exact
        >
          Wiki Search
        </NavLink>
      ) : (
        <span className='item disabled'>Wiki Search</span>
      )}
      <div className='right menu'>
        {auth.token ? (
          <span onClick={logout} className='link item'>
            Logout
          </span>
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
