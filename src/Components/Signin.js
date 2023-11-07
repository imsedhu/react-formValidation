import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';




const Signin = () => {
  const [formData, setFormData] = useState({
    username:'',
    password:'',
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
      [name]:'',
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = {};

    if(!formData.username.trim()){
      formIsValid = false;
      newErrors.username = 'Enter valid username'
    }
    if(!formData.password){
      formIsValid = false;
      newErrors.password = 'Enter your correct password'
    }

    setErrors(newErrors);

    if(formIsValid){
      /* setSuccessMessage('You Successfully login '); */
      alert('You have successfully login!');
      /* reset formdata */
      setFormData({
        username:'',
        password:'',
      });
    }else {
      setSuccessMessage('');
    }

  }

  return (
    <div className="form-container">
    <form action="home" className='signin-form' onSubmit={handleSubmit}>
      {successMessage && <div className='success text-center'>{successMessage}</div>}
      <h1 className='text-center'>Log in</h1>
      <hr />
      <div className="group">
        <label htmlFor="">Username</label>
        <input 
            type="text" 
            name="username" 
            id="uname" 
            placeholder='@Username'
            value={formData.username}
            onChange={handleChange}
        />
        {errors.username && <div className='error'>{errors.username}</div>}
      </div>
      <div className="group">
        <label htmlFor="">Password</label>
        <input 
            type="password" 
            name="password" 
            id="password"
            placeholder='password'
            value={formData.password}
            onChange={handleChange} 
        />
        {errors.password && <div className='error'>{errors.password}</div>}
      </div>
      <NavLink to="home">
          <button className='button'>Log in</button>
      </NavLink>     
      <hr />
      <p className='hint'>
        Don't have an account?
        <NavLink to="signup">
        <span>Sign Up</span>
        </NavLink> 
      </p>
    </form>
    </div>
  )
}

export default Signin