import React from 'react';
import '../../../App.css';
import { useEffect } from 'react';
import google from '../../../Assets/google.png';
import InputWL from './input.jsx';
import ButtonLog from './buttonlog';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword,selectUsername } from '../../../Store/loginSlice';
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
      <div id='main' className="dialog max-[600px]:w-auto md:mr-[5vw] h-[85vh] lg:w-[35vw] max-[600px]:max-w-[95vw] max-w-[35vw]">
        <h1 className='head text-[32px] text-center my-[3vh] font-extrabold'>LOGIN</h1>
        <div className="input-section mx-[5vw]">
          <InputWL
            onChange={handleUsernameChange}
            label='Username'
            htmlFor='username'
            type='email'
            labelClass='label'
            id='username'
            classes='inputWL'
            placeholder='Enter your username'
          />
          <div className='mb-[17px]'></div>
          <InputWL

            onChange={handlePasswordChange}
            label='Password'
            htmlFor='password'
            type='password'
            id='password'
            labelClass='label'
            classes='inputWL'
            placeholder='Enter your password'
            isPw = {true}
          ><svg className='absolute right-[20%] top-[44.5%] cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
          <path d="M6.99965 12.5479C7.66183 12.5479 8.26662 12.4736 8.81821 12.3453L7.58834 11.0782C7.39724 11.0934 7.20335 11.1056 6.99965 11.1056C3.25404 11.1056 1.80297 8.33218 1.45158 7.5C1.71544 6.89339 2.0718 6.33418 2.50716 5.84357L1.52858 4.83543C0.452004 6.03755 0.0439133 7.24833 0.0362135 7.27212C-0.0120712 7.42022 -0.0120712 7.58051 0.0362135 7.7286C0.0509132 7.77619 1.65668 12.5479 6.99965 12.5479ZM6.99965 2.4521C5.71378 2.4521 4.65751 2.73766 3.77693 3.15952L1.19469 0.5L0.20491 1.51968L12.8046 14.5L13.7944 13.4803L11.4711 11.0869C13.3009 9.67997 13.954 7.75889 13.9638 7.7286C14.0121 7.58051 14.0121 7.42022 13.9638 7.27212C13.9484 7.22381 12.3426 2.4521 6.99965 2.4521ZM10.48 10.0658L8.88401 8.4216C9.017 8.14036 9.0996 7.831 9.0996 7.5C9.0996 6.31663 8.14832 5.33661 6.99965 5.33661C6.67836 5.33661 6.37806 5.42171 6.10577 5.55944L4.8402 4.25564C5.53495 4.01003 6.26516 3.88786 6.99965 3.89435C10.7453 3.89435 12.1963 6.66782 12.5477 7.5C12.3363 7.99902 11.7315 9.18888 10.48 10.0658Z" fill="white"/>
        </svg></InputWL>

          <div className="flex flex-grow justify-between px-2 mt-1">
            
            <div className="rem">
              <input type="checkbox" name="rem-me" id="remember" className='accent-[#106c6f]' />
              <label htmlFor="remember" className='max-[600px]:mr-7 h-[20px] pb-[5px] mx-[0.2rem] text-sm inline-block align-middle'>Remember me</label>
            </div>

            <p className='text-sm mt-[3px] max-[600px]:ml-5'>Don't have an account?<br/>
             <a className="bg-transparent no-underline text-[#39dee4] font-extrabold hover:no-underline hover:text-white" href=""><Link  to='/signup'><p className='w-[100%] text-right'>Create account</p></Link></a>
            </p>

          </div>

        </div>
        <div className="button-section mx-[5vw] my-[3vw] flex flex-col items-center">
          <ButtonLog className='fillButton' onClick={(e)=>handleSubmit(e,username,password,dispatch)}>Login</ButtonLog>
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
          theme='outline'
          size='large'
        />
          {/* <Button onClick={() => login()}className='googleOutline'><img src={google} alt="" className='inline scale-50' />Sign-in With Google</Button> */}
        </div>
      </div>
    </>
  );
};

export default LoginDialog;
