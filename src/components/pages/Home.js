import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';

const Home = () => {
  const { auth } = useContext(UserContext);
  return (
    <motion.div exit='out' animate='in' initial='out' variants={PageTransition}>
      {auth.user
        ? `Welcome ${auth.user.displayName} you are now logged in`
        : 'You are logged out'}
    </motion.div>
  );
};

export default Home;
