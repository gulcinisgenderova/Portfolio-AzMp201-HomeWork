import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "../Post/style.css"

const Postpages = () => {
  return (
    <div className="new-product-form">
      <h2>Create New User</h2>
      <Formik
        initialValues={{
          username: '',
          name: '',
          surname: '',
          balance: '',
          email: '',
          password: '',
          date: '',
          gender: ''
        }}
        validationSchema={Yup.object({
          username: Yup.string().required('Username is required'),
          name: Yup.string().required('Name is required'),
          surname: Yup.string().required('Surname is required'),
          balance: Yup.number().required('Balance is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().required('Password is required'),
          date: Yup.date().required('Date is required'),
          gender: Yup.string().required('Gender is required')
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios.post('http://localhost:3000/users', values);
            alert('User created successfully!');
            resetForm();
          } catch (error) {
            console.error('Error creating user:', error);
            alert('Failed to create user!');
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" className="error-message" />

            <label>Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error-message" />

            <label>Surname:</label>
            <Field type="text" name="surname" />
            <ErrorMessage name="surname" component="div" className="error-message" />

            <label>Balance:</label>
            <Field type="number" name="balance" />
            <ErrorMessage name="balance" component="div" className="error-message" />

            <label>Email:</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />

            <label>Password:</label>
            <Field type="text" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />

            <label>Date:</label>
            <Field type="date" name="date" />
            <ErrorMessage name="date" component="div" className="error-message" />

            <label>Gender:</label>
            <Field as="select" name="gender">
              <option value="" label="Select Gender" />
              <option value="male" label="Male" />
              <option value="female" label="Female" />
              <option value="other" label="Other" />
            </Field>
            <ErrorMessage name="gender" component="div" className="error-message" />

            <button type="submit" disabled={isSubmitting}>Create User</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Postpages;
