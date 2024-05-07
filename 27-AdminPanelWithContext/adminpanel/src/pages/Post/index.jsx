import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "../Post/style.css"

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  price: Yup.number().required('Price is required'),
  category: Yup.string().required('Category is required'),
  image: Yup.string().required('Image URL is required'),
  rating: Yup.object().shape({
    rate: Yup.number().required('Rate is required'),
    count: Yup.number().required('Count is required'),
  })
});

const initialValues = {
  title: '',
  price: '',
  category: '',
  image: '',
  rating: {
    rate: '',
    count: ''
  }
};

const Post = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post('http://localhost:3000/products', values);
      alert('Product created successfully!');
      resetForm();
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="new-product-form">
      <h2>Create New Product</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Title:</label>
            <Field type="text" name="title" required />
            <ErrorMessage name="title" component="div" className="error" />

            <label>Price:</label>
            <Field type="number" name="price" required />
            <ErrorMessage name="price" component="div" className="error" />

            <label>Category:</label>
            <Field as="select" name="category" required>
              <option value="">Select a category</option>
              <option value="mens clothing">Mens Clothing</option>
              <option value="womens clothing">Womens Clothing</option>
              <option value="jewelry">Jewelry</option>
              <option value="electronics">Electronics</option>
            </Field>
            <ErrorMessage name="category" component="div" className="error" />

            <label>Image URL:</label>
            <Field type="text" name="image" required />
            <ErrorMessage name="image" component="div" className="error" />

            <label>Rate:</label>
            <Field type="number" name="rating.rate" required />
            <ErrorMessage name="rating.rate" component="div" className="error" />

            <label>Count:</label>
            <Field type="number" name="rating.count" required />
            <ErrorMessage name="rating.count" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>Create Product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Post;
