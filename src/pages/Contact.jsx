import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name) newErrors.user_name = 'Name is required';
    if (!formData.user_email) newErrors.user_email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formData,
      EMAILJS_PUBLIC_KEY
      )
      .then(
      (result) => {
        alert('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' }); // Reset form
      },
      (error) => {
        alert('An error occurred. Please try again.');
      }
      );
  };

  return (
    <div className='flex flex-row items-center justify-center min-h-screen'>
      <div className='bg-color-sidebarBackground p-8 rounded-lg'>
        <div className='flex flex-col justify-center'>
          <form onSubmit={sendEmail} className='flex flex-col gap-3'>
            <div>
              <input
                type='text'
                name='user_name'
                placeholder='Enter your name'
                className='p-2 border rounded w-80 lg:w-96 bg-neutral-300'
                value={formData.user_name}
                onChange={handleInputChange}
              />
              {errors.user_name && <p className='text-red-500'>{errors.user_name}</p>}
            </div>
            <div>
              <input
                type='email'
                name='user_email'
                placeholder='Enter your email'
                className='p-2 border rounded w-80 lg:w-96 bg-neutral-300'
                value={formData.user_email}
                onChange={handleInputChange}
              />
              {errors.user_email && <p className='text-red-500'>{errors.user_email}</p>}
            </div>
            <div>
              <textarea
                name='message'
                placeholder='Enter your message'
                className='p-2 border rounded w-80 lg:w-96 bg-neutral-300'
                rows='4'
                value={formData.message}
                onChange={handleInputChange}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
              />
              {errors.message && <p className='text-red-500'>{errors.message}</p>}
            </div>
            <button type='submit' className='mt-3 p-2 bg-blue-500 text-white rounded'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
