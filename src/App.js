import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./context/userContext";

import authService from "./api/authServer";
import Home from './components/pages/Home';
import YoutubeSearch from "./components/pages/YoutubeSearch";
import ImageSearchPage from "./components/pages/ImageSearchPage";
import RandomPractice from "./components/pages/RandomPractice";
import WikiSearch from "./components/WikiSearch";
import Translate from "./components/Translate";
import Signup from "./components/auth/Signup";
import Header from "./components/Header";
import SignIn from "./components/auth/SingIn";

const App = () => {
  const [auth, setAuth] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
       window.localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await authService.post("/users/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenRes.data) {
        const userRes = await authService.get("/users/", {
          headers: { "x-auth-token": token },
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

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ auth, setAuth }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/YoutubeSearch" component={YoutubeSearch} />
            <Route exact path="/imageSearchPage" component={ImageSearchPage} />
            <Route exact path="/components" component={RandomPractice} />
            <Route path="/translate" component={Translate} />
            <Route path="/searchwiki" component={WikiSearch} />
            <Route path="/auth/register" component={Signup} />
            <Route path="/auth/login" component={SignIn} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
