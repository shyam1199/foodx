import React, { useState } from 'react';
import { sendDetails } from '../backend/services/contact-us';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await sendDetails(formData);
    if (error) return alert(error);

    setFormData({ name: '', email: '', details: '' });
    alert('Details Submitted');
    navigate("/")
  };

  return (
    <div className='w-11/12 md:w-4/12 bg-white mx-auto shadow-lg p-6'>
      <h2 className='text-2xl font-semibold text-center mb-6'>We'd Love to Hear from You</h2>
      <form className='' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
            className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
            className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="">Details</label>
          <textarea type="details" id="details" name="details" value={formData.details} onChange={handleChange} required
            className="block w-full  min-h-24 border border-gray-300 rounded-md shadow-sm px-3 py-2" />
        </div>
        <div className="mb-4 text-center">
          <button type="submit" className=" bg-blue-600 w-8/12 mx-auto py-1 rounded-lg hover:bg-blue-800 text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
