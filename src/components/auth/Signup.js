import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import userContext from '../../context/userContext';
import authService from '../../api/authServer';
import authValidationSchema from './authValidationSchema';
import ErrorMsg from './ErrorMsg';
import '../Form.css';

const Signup = () => {
  const [err, setErr] = useState(null);
  const history = useHistory();
  const { setAuth } = useContext(userContext);
  const formik = useFormik({
    initialValues: {
      displayName: '',
      email: '',
      password: '',
      passwordCheck: '',
    },
    validationSchema: authValidationSchema,
  });

  const displayErr = (touched, error) => {
    return touched && error ? 'error' : '';
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.post('/users/register', formik.values);
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
      console.log(window.localStorage);
      history.push('/');
    } catch (error) {
      setErr(error.response.data.msg);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`ui form ${
        err ? 'error' : ''
      } raised padded segment container`}
    >
      <div
        className={` field ${displayErr(
          formik.touched.displayName,
          formik.errors.displayName
        )}`}
      >
        <label htmlFor='displayName'>Display Name</label>

        <input
          id='displayName'
          name='displayName'
          type='text'
          {...formik.getFieldProps('displayName')}
        />
        {formik.touched.displayName && formik.errors.displayName ? (
          <div className='error-msg'>{formik.errors.displayName}</div>
        ) : null}
      </div>

      <div
        className={` field ${displayErr(
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
        className={` field ${displayErr(
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
      <div
        className={` field ${displayErr(
          formik.touched.passwordCheck,
          formik.errors.passwordCheck
        )}`}
      >
        <label htmlFor='passwordCheck'>Confirm Password</label>
        <input
          id='passwordCheck'
          name='passwordCheck'
          type='password'
          {...formik.getFieldProps('passwordCheck')}
        />
        {formik.touched.passwordCheck && formik.errors.passwordCheck ? (
          <div className='error-msg'>{formik.errors.passwordCheck}</div>
        ) : null}
      </div>
      <ErrorMsg err={{ err, setErr }} />

      <button type='submit' className='ui button primary'>
        Submit
      </button>
    </form>
  );
};

export default Signup;
