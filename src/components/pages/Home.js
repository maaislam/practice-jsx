import React, { useContext } from "react";
import userContext from "../../context/userContext";

const Home = () => {
  const { auth } = useContext(userContext);
  return (
    <div>
      {auth.user
        ? `Welcome ${auth.user.displayName} you are now logged in`
        : "You are logged out"}
    </div>
  );
};

export default Home;
