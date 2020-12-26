import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { UserContext } from '../../context/UserContext';
import authService from '../../api/authServer';
import authValidationSchema from './authValidationSchema';
import ErrorMsg from './ErrorMsg';

import '../Form.css';

import { motion } from 'framer-motion';
import PageTransition from '../pages/PageTransition';

const SingIn = () => {
  const { setAuth } = useContext(UserContext);
  const [err, setErr] = useState(null);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: authValidationSchema,
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formik.values;
      const loginRes = await authService.post('/users/login', {
        email,
        password,
      });

      setAuth({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      window.localStorage.setItem('auth-token', loginRes.data.token);

      history.push('/');
    } catch (error) {
      setErr(error.response.data.msg);
    }
  };

  const displayErr = (touched, error) => {
    return touched && error ? 'error' : '';
  };

  return (
    <motion.form
      exit='out'
      animate='in'
      initial='out'
      variants={PageTransition}
      onSubmit={onSubmit}
      className={`ui form ${
        err ? 'error' : ''
      } raised padded segment container`}
    >
      <div
        className={`field ${displayErr(
          formik.touched.email,
          formik.errors.email
        )}`}
      >
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          name='email'
          type='email'
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error-msg'>{formik.errors.email}</div>
        ) : null}
      </div>
      <div
        className={`field ${displayErr(
          formik.touched.password,
          formik.errors.password
        )}`}
      >
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className='error-msg'>{formik.errors.password}</div>
        ) : null}
      </div>
      <ErrorMsg err={{ err, setErr }} />
      <button type='submit' className='ui button primary'>
        Login
      </button>
    </motion.form>
  );
};

export default SingIn;
