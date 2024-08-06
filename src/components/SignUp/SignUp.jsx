import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './form.css';

const SignUp = ({ onFormDataChange }) => {
  const [formData, setFormData] = useState({
    first: '',
    second: '',
    num: '',
    mail: ''
  });

  useEffect(() => {
    if (typeof onFormDataChange === 'function') {
      onFormDataChange(formData);
    } else {
      console.error('onFormDataChange is not a function');
    }
  }, [formData, onFormDataChange]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5175/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({
          first: '',
          second: '',
          num: '',
          mail: ''
        });
      } else {
        const errorText = await response.text();
        console.error('Server responded with an error:', response.status, errorText);
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className='main' id='sign'>
      <motion.div
        className="head"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        INPUT FORM
      </motion.div>
      <motion.form
        id='Form'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
      >
        <motion.div
          className="sec1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <input
            type='text'
            id='first'
            placeholder='PLEASE ENTER FIRST NAME'
            value={formData.first}
            onChange={handleChange}
          />
          <input
            type='text'
            id='second'
            placeholder='PLEASE ENTER LAST NAME'
            value={formData.second}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div
          className="sec2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <input
            type='number'
            id='num'
            placeholder='PLEASE ENTER YOUR NUMBER'
            value={formData.num}
            onChange={handleChange}
          />
          <input
            type='email'
            id='mail'
            placeholder='PLEASE ENTER YOUR EMAIL'
            value={formData.mail}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div
          className="submit-button"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 0.8 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <button type="submit">Submit</button>
        </motion.div>
      </motion.form>
    </div>
  );
};

SignUp.propTypes = {
  onFormDataChange: PropTypes.func.isRequired,
};

export default SignUp;