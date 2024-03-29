import React, { useState } from 'react'
import '../../../App.css'
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
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

  const [agreeToTerms, setAgree] = useState(false);

  const handleCheckboxChange = () => {
    const updatedAgreeToTerms = !agreeToTerms;
    setAgree(updatedAgreeToTerms);
    dispatch(setAgreeToTerms(updatedAgreeToTerms));
  };


  const eyeIcon = (show, onClick, classname) => { return show? (
    <svg
      className={classname}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 251 152" fill="none">
      <path d="M2.79983 82.6865C19.1841 101.419 67.9219 151.372 125.578 151.372C183.234 151.372 231.971 101.421 248.356 82.6865C251.879 78.5237 251.879 72.658 248.356 68.6863C231.971 49.9538 183.234 0.000536068 125.578 0.000536068C67.9219 -0.188681 19.1841 49.7646 2.79983 68.4971C-0.933278 72.6599 -0.933278 78.5237 2.79983 82.6865ZM125.578 30.0861C153.161 30.0861 175.353 50.3323 175.353 75.4982C175.353 100.664 153.161 120.91 125.578 120.91C97.9942 120.91 75.8029 100.664 75.8029 75.4982C75.8029 50.3323 97.9942 30.0861 125.578 30.0861Z" fill="white"/>
      <path d="M125.578 98.2042C139.323 98.2042 150.465 88.0384 150.465 75.4982C150.465 62.958 139.323 52.7921 125.578 52.7921C111.833 52.7921 100.69 62.958 100.69 75.4982C100.69 88.0384 111.833 98.2042 125.578 98.2042Z" fill="white"/>
      </svg>
  ) : (
    <svg
      className={classname}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
    >
      <path d="M6.99965 12.5479C7.66183 12.5479 8.26662 12.4736 8.81821 12.3453L7.58834 11.0782C7.39724 11.0934 7.20335 11.1056 6.99965 11.1056C3.25404 11.1056 1.80297 8.33218 1.45158 7.5C1.71544 6.89339 2.0718 6.33418 2.50716 5.84357L1.52858 4.83543C0.452004 6.03755 0.0439133 7.24833 0.0362135 7.27212C-0.0120712 7.42022 -0.0120712 7.58051 0.0362135 7.7286C0.0509132 7.77619 1.65668 12.5479 6.99965 12.5479ZM6.99965 2.4521C5.71378 2.4521 4.65751 2.73766 3.77693 3.15952L1.19469 0.5L0.20491 1.51968L12.8046 14.5L13.7944 13.4803L11.4711 11.0869C13.3009 9.67997 13.954 7.75889 13.9638 7.7286C14.0121 7.58051 14.0121 7.42022 13.9638 7.27212C13.9484 7.22381 12.3426 2.4521 6.99965 2.4521ZM10.48 10.0658L8.88401 8.4216C9.017 8.14036 9.0996 7.831 9.0996 7.5C9.0996 6.31663 8.14832 5.33661 6.99965 5.33661C6.67836 5.33661 6.37806 5.42171 6.10577 5.55944L4.8402 4.25564C5.53495 4.01003 6.26516 3.88786 6.99965 3.89435C10.7453 3.89435 12.1963 6.66782 12.5477 7.5C12.3363 7.99902 11.7315 9.18888 10.48 10.0658Z" fill="white"/>
    </svg>
  ); }

  return (
        <div className="dialogSign w-[70%] mx-[8vw] md:mx-[5vw] h-[95%] my-2 pb-7 max-[600px]:max-w-[75vw] max-[600px]:w-auto  relative" id='main2'>
        <h1 className='headSign text-[35px] text-center mt-[2vh]'>Get Started</h1>
            <div className="grid grid-cols-2 gap-3 px-[12%] pt-3">
                <InputWL label="First name" labelClass={'labelSignUp'} classes='signupInput'  id="fname" type='text' placeholder='eg. Abdullah' onChange={handleChange}></InputWL>
                <InputWL label="Last name" labelClass={'labelSignUp'} id='lname' classes='signupInput' type='text' placeholder='eg. Masood' onChange={handleChange}></InputWL>
                <InputWL label="Email" labelClass={'labelSignUp'} id='email' classes='signupInput'  type='email' placeholder='abc@gmail.com' onChange={handleChange}></InputWL>
                <InputWL label="Username" labelClass={'labelSignUp'} classes='signupInput' id='username' type='text' placeholder='eg. abdullah_masood' onChange={handleChange}></InputWL>
                <InputWL label="Password" labelClass={'labelSignUp'} classes='signupInput' id='password'  type={showPassword ? 'text' : 'password'} placeholder='Enter a strong password' onChange={handleChange}>
                {eyeIcon(showPassword, togglePasswordVisibility,'absolute left-[45%] top-[49.7%] cursor-pointer')}</InputWL>
                <InputWL label="Confirm Password" labelClass={'labelSignUp'} classes='signupInput' id='cpassword' type={showConfirmPassword ? 'text' : 'password'} placeholder='Re-enter your password' onChange={handleChange}>
                {eyeIcon(showConfirmPassword, toggleConfirmPasswordVisibility,'absolute right-[15%] top-[49.6%] cursor-pointer')}
                </InputWL>
                <InputWL label="Gender" labelClass={'labelSignUp'} classes='signupInput' list="gender" placeholder='Choose your gender' onChange={handleChange}>
                  <datalist id="gender">
                      <option value="Male"/>
                      <option value="Female"/>
                  </datalist>
                </InputWL>
                <InputWL labelClass={'labelSignUp'} classes='signupInput' label="Date of Birth" id='dob' type='date' onChange={handleChange}></InputWL>
                <div className='text-[13px] px-[3%] mb-[4%]'>
                  <Checkbox classNameInput='accent-[#106c6f] cursor-pointer' label="Remember me" classNameLabel='mx-[0.9rem]'></Checkbox>
                  <Checkbox classNameInput='accent-[#106c6f] cursor-pointer' classNameLabel='mx-[0.9rem]' onChange={handleCheckboxChange}>I agree to all the <span className='text-[#33babe]'>Terms</span> and <span className='text-[#33babe]'>Privacy policy</span></Checkbox>
                </div>
            </div>
            
            <div className="button-section px-[6%] mx-[5vw] mt-[1vh] mb-4 flex flex-row items-center justify-between">
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
            <p className='text-center max-h-[80%] text-[13px] my-auto'>Already have an account? <Link to='/login' className='text-[#33babe]'><u>Log In</u></Link></p>
        </div>
  )
}

export default SignDialog