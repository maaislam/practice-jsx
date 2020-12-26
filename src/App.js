import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { UserContext } from './context/UserContext';

import authService from './api/authServer';
import Home from './components/pages/Home';
import YoutubeSearch from './components/pages/YoutubeSearch';
import ImageSearchPage from './components/pages/ImageSearchPage';
import RandomPractice from './components/pages/RandomPractice';
import WikiSearch from './components/WikiSearch';
import Translate from './components/Translate';
import Signup from './components/auth/Signup';
import Header from './components/Header';
import SignIn from './components/auth/SingIn';

const App = () => {
  const [auth, setAuth] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        window.localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await authService.post('/users/tokenIsValid', null, {
        headers: { 'x-auth-token': token },
      });
      if (tokenRes.data) {
        const userRes = await authService.get('/users/', {
          headers: { 'x-auth-token': token },
        });
        console.log(userRes);
        setAuth({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  let location = useLocation();

  return (
    <>
      <UserContext.Provider value={{ auth, setAuth }}>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Home} />
            <Route exact path='/YoutubeSearch' component={YoutubeSearch} />
            <Route exact path='/imageSearchPage' component={ImageSearchPage} />
            <Route exact path='/components' component={RandomPractice} />
            <Route path='/translate' component={Translate} />
            <Route path='/searchwiki' component={WikiSearch} />
            <Route path='/auth/register' component={Signup} />
            <Route path='/auth/login' component={SignIn} />
          </Switch>
        </AnimatePresence>
      </UserContext.Provider>
    </>
  );
};

export default App;
