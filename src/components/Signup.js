import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Signup = () => {

 

    // Pass the useFormik() hook initial form values and a submit function that will
 
    // be called when the form is submitted
 
    const formik = useFormik({
 
      initialValues: {
 
        firstName:'',
        lastName:'',
        email: '',
 
			},
			validationSchema: Yup.object({

				firstName: Yup.string()
 
					.max(15, 'Must be 15 characters or less')
 
					.required('Required'),
 
				lastName: Yup.string()
 
					.max(20, 'Must be 20 characters or less')
 
					.required('Required'),
 
				email: Yup.string().email('Invalid email address').required('Required'),
 
			}),
 
      onSubmit: values => {
 
        alert(JSON.stringify(values, null, 2));
 
      },
 
    });
 
    return (
 
      <form onSubmit={formik.handleSubmit}>
			<div>

 				<label htmlFor="firstName">First Name</label>		
 
        <input
 
          id="firstName"
 
          name="firstName"
 
          type="firstName"
 
          {...formik.getFieldProps('firstName')}
 
        />
         {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
			</div>
			<div>

				<label htmlFor="firstName">Last Name</label>
        <input
 
          id="lastName"
 
          name="lastName"
 
          type="lastName"
					{...formik.getFieldProps('lastName')}
 
        />
        {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
			</div>	
      <div>

				<label htmlFor="email">Email Address</label>
				<input
 
          id="email"
 
          name="email"
 
          type="email"
 
          {...formik.getFieldProps('email')}
 
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
			</div> 
        <button type="submit">Submit</button>
 
      </form>
 
    );
 
  };



export default Signup;
