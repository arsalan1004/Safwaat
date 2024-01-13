import React, { useState } from 'react'
import axios from 'axios';
import {toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";
import { useSelector,useDispatch } from 'react-redux';
import { setId } from '../Store/loginSlice';



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

function handleCallbackResponse(response){
    console.log(`Encoded JWT ID token: ${response}`);
    let obj = jwtDecode(response.credential);
    console.log(obj);
    let userData = {
      email: obj.email,
      firstName : obj.family_name,
      lastName: obj.given_name
    }
    axios.post("http://localhost:8000/api/signup/google", userData,{withCredentials:true}).then((response) => {
    console.log(response);
    if(response.status==201){
      notifysucc(response.data.firstName);
    }else if(response.status==409){
      notifyerror(response.data.message);
    }
    else{
      notifyerror("Account Creation Failed");
    }
  }).catch((error)=>notifyerror(error.response.data.message));
  console.log("data sent",userData);
}



const handleSubmit = (e,sign,dispatch)=>{
  e.preventDefault();
  console.log(`${sign.password} == ${sign.confirmPassword}`)
  if(sign.password==sign.confirmPassword){
    const userData = {
      username: sign.username,
      password: sign.password,
      firstName: sign.firstName,
      lastName: sign.lastName,
      email: sign.email,
      gender: sign.gender,
      dateOfBirth: sign.dateOfBirth,
    };
    console.log(`Userdata: `,userData);
    axios.post("http://localhost:8000/api/signup/", userData,{withCredentials:true}).then((response) => {
      console.log(response);
      if(response.status==201){
        notifysucc(response.data.username);
        dispatch(setId(response.data.userId));
      }else if(response.status==409){
        notifyerror(response.data.message);
      }
      else{
        notifyerror("Account Creation Failed");
      }
    }).catch((error)=>notifyerror(error.response.data.message));
    console.log("data sent",userData);
  }else{
    notifyerror("Password Doesnot Match!");
  }
  
};

export {handleCallbackResponse,handleSubmit};