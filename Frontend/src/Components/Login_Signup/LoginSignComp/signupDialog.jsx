import React, { useState } from 'react'
import '../../../App.css'
import google from '../../../Assets/google.png';
import InputWL from './input.jsx';
import ButtonLog from './buttonlog';
import Checkbox from './checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { setConfirmPassword,setdetails,setUsername,setDateOfBirth,setGender,setEmail,setPassword,setRememberMe,setFirstName,setLastName,setAgreeToTerms } from '../../../Store/signSlice';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import {toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";
import { handleSubmit,handleCallbackResponse } from '../../../API/signAPI';

const SignDialog = () => {
  const dispatch = useDispatch()
  const sign = useSelector(state=>state.sign)
  const navigate = useNavigate()

  const notifysucc = (msg) => {
    toast.success(`Successful Account Creation as ${msg}`, {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const notifyerror = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const handleChange = (e) => {
    const { id, value ,list} = e.target;
    if(list){
      dispatch(setGender(value));
    }

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
        console.log(value);
        break;
      case "cpassword":
        dispatch(setConfirmPassword(value));
        console.log(value);
        break;
      case 'dob':
        dispatch(setDateOfBirth(value));
        console.log(sign.dateOfBirth);
        break;
      default:
        break;
    }
  };


  return (
        <div className="dialogSign w-[70%] mx-[8vw] md:mx-[5vw] mb-4 h-[95%] mt-6 pb-7 max-[600px]:max-w-[75vw] max-[600px]:w-auto overflow-scroll  relative" id='main2'>
        <h1 className='headSign text-[35px] text-center mt-[3vh]'>Get Started</h1>
            <div className="grid grid-cols-2 gap-3 px-[12%] pt-10">
                <InputWL label="First name" id="fname" type='text' placeholder='eg. Abdullah' onChange={handleChange}></InputWL>
                <InputWL label="Last name"  id='lname' type='text' placeholder='eg. Masood' onChange={handleChange}></InputWL>
                <InputWL label="Email" id='email'  type='email' placeholder='abc@gmail.com' onChange={handleChange}></InputWL>
                <InputWL label="Username"  id='username' type='text' placeholder='eg. abdullah_masood' onChange={handleChange}></InputWL>
                <InputWL label="Password"  id='password' type='password' placeholder='Enter a strong password' onChange={handleChange}></InputWL>
                <InputWL label="Confirm Password"  id='cpassword' type='password' placeholder='Re-enter your password' onChange={handleChange}></InputWL>
                <InputWL label="Gender" list="gender" placeholder='Choose your gender' onChange={handleChange}>
                  <datalist id="gender">
                      <option value="Male"/>
                      <option value="Female"/>
                  </datalist>
                </InputWL>
                <InputWL label="Date Of Birth" id='dob' type='date' onChange={handleChange}></InputWL>
                <div className='text-[13px] px-[3%] mb-[4%]'>
                  <Checkbox classNameInput='accent-[#106c6f]' label="Remember me" classNameLabel='mx-[0.9rem]'></Checkbox>
                  <Checkbox classNameInput='accent-[#106c6f]' classNameLabel='mx-[0.9rem]'>I agree to all the <span className='text-[#33babe]'>Terms</span> and <span className='text-[#33babe]'>Privacy policy</span></Checkbox>
                </div>
            </div>
            
            <div className="button-section px-[6%] mx-[5vw] my-[2vh] flex flex-row items-center justify-between">
                <ButtonLog className='fillButtonSign' onClick={function(e){ return handleSubmit(e,sign,dispatch)}}>Create Account</ButtonLog>
                <GoogleLogin onSuccess={credentialResponse => {
                  handleCallbackResponse(credentialResponse);
                }}
                onError={() => {
                  toast.error("Login Failed !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                }} width='300' useOneTap/>
                {/* <Button className='googlefill' onClick={()=><GoogleLogin/>}><img src={google} alt="" className='inline scale-50'/>Sign-in With Google</Button> */}
            </div>
            <p className='text-center max-h-[80%] my-auto'>Already have an account? <Link to='/' className='text-[#33babe]'><u>Log In</u></Link></p>
        </div>
  )
}

export default SignDialog