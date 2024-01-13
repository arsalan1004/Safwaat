import React from 'react';
import '../../../App.css';
import { useEffect } from 'react';
import google from '../../../Assets/google.png';
import InputWL from './input.jsx';
import ButtonLog from './buttonlog';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword } from '../../../Store/loginSlice';
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { handleCallbackResponse,handleSubmit } from '../../../API/loginAPI';

const LoginDialog = () => {
  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notifysucc = (msg) => {
    toast.success(`Successful Login as ${msg}`, {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const notifyerror = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT
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

  return (
    <>
      <div id='main' className="dialog max-[600px]:w-[75vw] mx-[8vw] md:mx-[5vw] h-[79vh] lg:w-[35vw]">
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
              <label htmlFor="remember" className='max-[600px]:mr-7 h-[20px] pb-[5px] mx-[0.2rem] text-sm inline-block align-middle'>Remember me</label>
            </div>
            <p className='text-sm mt-[3px] max-[600px]:ml-5'>Don't have an account?&nbsp;
            <a className="bg-transparent no-underline text-[#39dee4] font-extrabold hover:no-underline hover:text-white" href=""><Link to='/signup'>Create account</Link></a>
            </p>
          </div>
        </div>
        <div className="button-section mx-[5vw] my-[5vw] flex flex-col items-center">
          <ButtonLog className='fillButton' onClick={(e)=>handleSubmit(e)}>Login</ButtonLog>
          <div className='flex'>
            <hr className='w-[4vw] m-5 inline' />
            <span className='my-2'>OR</span>
            <hr className='w-[4vw] m-5 inline' />
          </div>
          <GoogleLogin
          onSuccess={credentialResponse => {
            handleCallbackResponse(credentialResponse);
          }}
          onError={() => {
            toast.error("Login Failed !", {
              position: toast.POSITION.TOP_RIGHT
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
