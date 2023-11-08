import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password:'',
    confirmPassword:'',
  });


  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* validate form */
    let formIsValid = true;
    const newErrors = {};

    if(!formData.username.trim()) {
      formIsValid = false;
      newErrors.username = 'Username is required';
    }
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Invaild email address'
    }
    if(formData.password.length < 6) {
      formIsValid = false;
      newErrors.password = 'Password must be at least 6 characters'
    }
    if(formData.password !== formData.confirmPassword) {
      formIsValid = false;
      newErrors.confirmPassword = 'Password do not match'
    }else if(!formData.confirmPassword){
      formIsValid = false;
      newErrors.confirmPassword = 'Re-enter your password'
    }
    
    setErrors(newErrors);

    if(formIsValid) {
      /* setSuccessMessage('You have Successfully created your account!'); */
      alert('You have Successfully create your account!')
      /* reset form data */
      setFormData({
        username: '',
        email:'',
        password:'',
        confirmPassword:'',
      });
      window.location.href = '/';
    }else {
      setSuccessMessage('');
    }

  }

  return (
    <div className="form-container">
    <form action="" className='signin-form' onSubmit={handleSubmit}>
    {successMessage && <div className='success text-center  '>{successMessage}</div>}
      <h1 className='text-center'>Create your account</h1>
      <hr />
      <div className="group">
        <label htmlFor="">Username</label>
        <input 
            type="text" 
            name="username" 
            id="uname" 
            placeholder='Set your @username'
            value={formData.username}
            onChange={handleChange}
        />
        {errors.username && <div className='error'>{errors.username}</div>}
      </div>
      <div className="group">
        <label htmlFor="">Email</label>
        <input 
            type="email" 
            name="email" 
            id="uname" 
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
        />
        {errors.email && <div className='error'>{errors.email}</div>}
      </div>
      <div className="group">
        <label htmlFor="">Password</label>
        <input 
            type="password" 
            name="password" 
            id="password"
            placeholder='Enetr your password' 
            value={formData.password}
            onChange={handleChange}
        />
        {errors.password && <div className='error'>{errors.password}</div>}
      </div>
      <div className="group">
        <label htmlFor="">Confirm Password</label>
        <input 
            type="password" 
            name="confirmPassword" 
            id="password"
            placeholder='Re-enter your password' 
            value={formData.confirmPassword}
            onChange={handleChange}
        />
        {errors.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
      </div>
      {/* <NavLink to="/"> */}
          <button className='button' type='submit'>Sign up</button>
      {/* </NavLink> */}
      <hr />
      <p className='hint'>
        Already have an account?  
        <NavLink to="/">
            <span>sign in</span>
        </NavLink>
      </p>
    </form>
      
    </div>
  )
}

export default Signup