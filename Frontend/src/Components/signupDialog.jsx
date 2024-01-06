import React, { useState } from 'react'
import '../App.css'
import google from '../assets/google.png'
import InputWL from './input.jsx';
import Button from './button';
import Checkbox from './checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { setdetails,setUsername,setDateOfBirth,setGender,setEmail,setPassword,setRememberMe,setFirstName,setLastName,setAgreeToTerms } from '../Features/signSlice';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';


const SignDialog = () => {
  const dispatch = useDispatch()
  const sign = useSelector(state=>state.sign)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target;

    switch (id) {
      case 'fname':
        dispatch(setFirstName(value));
        break;
      case 'lname':
        dispatch(setLastName(value));
        break;
      case 'email':
        dispatch(setEmail(value));
        break;
      case 'username':
        dispatch(setUsername(value));
        break;
      case 'password':
        dispatch(setPassword(value));
        break;
      case 'gender':
        dispatch(setGender(value));
        console.log(sign.gender)
        break;
      case 'dob':
        dispatch(setDateOfBirth(value));
        console.log(sign.dateOfBirth);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const userData = {
      username: sign.username,
      password: sign.password,
      firstName: sign.firstName,
      lastName: sign.lastName,
      email: sign.email,
      gender: sign.gender,
      dateOfBirth: sign.dateOfBirth,
    };
    axios.post("http://localhost:8000/api/signup", userData).then((response) => {
      console.log(response.status);
    });
    console.log("data sent",userData);
  };


  return (
    <>
        <div className="dialog mx-[8vw] md:mx-[5vw] h-[79vh] md:w-[65vw]">
        <h1 className='head text-[35px] text-center my-[3vh]'>GET STARTED</h1>
            <div className="grid grid-cols-2 gap-4 px-10 pt-10">
                <InputWL label="First name" id="fname" type='text' placeholder='eg. Abdullah' onChange={handleChange}></InputWL>
                <InputWL label="Last name"  id='lname' type='text' placeholder='eg. Masood' onChange={handleChange}></InputWL>
                <InputWL label="Email" id='email'  type='email' placeholder='abc@gmail.com' onChange={handleChange}></InputWL>
                <InputWL label="Username"  id='username' type='text' placeholder='eg. abdullah_masood' onChange={handleChange}></InputWL>
                <InputWL label="Password"  id='password' type='password' placeholder='Enter a strong password' onChange={handleChange}></InputWL>
                <InputWL label="Confirm Password"  id='cpassword' type='password' placeholder='Re-enter your password' ></InputWL>
                <InputWL label="Gender" id='gender' list="gender" placeholder='Choose your gender' onChange={handleChange}>
                  <datalist id="gender">
                      <option value="Male"/>
                      <option value="Female"/>
                  </datalist>
                </InputWL>
                <InputWL label="Date Of Birth" id='dob' type='date' onChange={handleChange}></InputWL>
                <div>
                  <Checkbox classNameInput='accent-[#106c6f]' label="Rememeber Me" classNameLabel='mx-[0.9rem]'></Checkbox>
                  <Checkbox classNameInput='accent-[#106c6f]' classNameLabel='mx-[0.9rem]'>I agree to all the <span className='text-[#33babe]'>Terms</span> and <span className='text-[#33babe]'>Privacy policy</span></Checkbox>
                </div>
            </div>
            
            <div className="button-section mx-[5vw] my-[2vh] flex flex-row items-center justify-between px-10">
                <Button className='fillButton' onClick={handleSubmit}>Create Account</Button>
                <GoogleLogin width='300' useOneTap/>
                {/* <Button className='googlefill' onClick={()=><GoogleLogin/>}><img src={google} alt="" className='inline scale-50'/>Sign-in With Google</Button> */}
            </div>
            <p className='text-center'>Already have an account? <Link to='/' className='text-[#33babe]'>Log In</Link></p>
        </div>
    </>
  )
}

export default SignDialog