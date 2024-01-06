import React from 'react';
import '../App.css';
import { useEffect } from 'react';
import google from '../assets/google.png';
import InputWL from './input.jsx';
import Button from './button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword } from '../Features/loginSlice';
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LoginDialog = () => {
  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

  const handleUsernameChange = (e) => {
    const Username = e.target.value;
    dispatch(setUsername(Username));
    console.log(username);
  };

  const handlePasswordChange = (e) => {
    const Password = e.target.value;
    dispatch(setPassword(Password));
    console.log(password);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const userData = {
      username: username,
      password: password
    };
    axios.post("http://localhost:8000/api/login", userData).then((response) => {
      console.log(response.status);
    });
    console.log("data sent",userData);
  };

  function handleCallbackResponse(response){
    console.log(response)
    console.log(`Encoded JWT ID token: ${response}`);
    let obj = jwtDecode(response.credential);
    console.log(obj);
  }


  return (
    <>
      <div id='main' className="dialog mx-[8vw] md:mx-[5vw] h-[79vh] lg:w-[35vw]">
        <h1 className='head text-[35px] text-center my-[3vh]'>LOGIN</h1>
        <div className="input-section mx-[5vw]">
          <InputWL
            onChange={handleUsernameChange}
            label='Username'
            htmlFor='username'
            type='email'
            id='username'
            className='mb-[5vh]'
          />
          <InputWL
            onChange={handlePasswordChange}
            label='Password'
            htmlFor='password'
            type='password'
            id='password'
            className='mb-[2vh]'
          />
          <div className="flex flex-grow justify-between">
            <div className="rem">
              <input type="checkbox" name="rem-me" id="remember" className='accent-[#106c6f]' />
              <label htmlFor="remember" className='h-[20px] pb-[5px] mx-[0.2rem] text-sm inline-block align-middle'>Remember me</label>
            </div>
            <p className='text-sm mt-[3px]'>Don't have an account?
            <a className="bg-transparent no-underline text-[#106c6f] font-extrabold hover:no-underline hover:text-white" href=""><Link to='/signup'>Create account</Link></a>
            </p>
          </div>
        </div>
        <div className="button-section mx-[5vw] my-[5vw] flex flex-col items-center">
          <Button className='fillButton' onClick={()=>{notify("Login as Guest"); navigate('/challenges');}}>Login</Button>
          <div className='flex'>
            <hr className='w-[4vw] m-5 inline' />
            <span className='my-2'>OR</span>
            <hr className='w-[4vw] m-5 inline' />
          </div>
          <GoogleLogin
          onSuccess={credentialResponse => {
            handleCallbackResponse(credentialResponse);
            toast.success("Login Success !", {
              position: toast.POSITION.BOTTOM_CENTER
            });
          }}
          onError={() => {
            toast.error("Login Failed !", {
              position: toast.POSITION.TOP_CENTER
            });
          }}
          theme='filled_blue'
        />
          {/* <Button onClick={() => login()}className='googleOutline'><img src={google} alt="" className='inline scale-50' />Sign-in With Google</Button> */}
        </div>
      </div>
    </>
  );
};

export default LoginDialog;
