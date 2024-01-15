import React, { useState } from 'react'
import axios from 'axios';
import {toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";
import { setId } from '../Store/loginSlice';

const notifysucc = (msg) => {
    toast.success(`Successful login as ${msg}`, {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const notifyerror = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT
    });
  };

const handleSubmit = (e,u,p,dispatch) =>{
    e.preventDefault();
    const userData = {
      username: u,
      password: p
    };
    
    axios.post("http://localhost:8000/api/login", userData,{ withCredentials: true }).then((response) => {
      console.log(response);
      if(response.status==200){
        notifysucc(response.data.username);
        dispatch(setId(response.data.id));
      }else{
        notifyerror("Invalid Credentials");
      }
    }).catch((error)=>console.log(error));
    console.log("data sent",userData);
  };

  function handleCallbackResponse(response){
    console.log(response)
    console.log(`Encoded JWT ID token: ${response}`);
    let obj = jwtDecode(response.credential);
    console.log(obj);
    let userData = {
      email: obj.email,
      firstName : obj.family_name,
      lastName: obj.given_name
    }
    console.log(userData);
    axios.post("http://localhost:8000/api/login/google", userData,{withCredentials:true}).then((response) => {
    console.log(response);
    if(response.status==200){
      notifysucc(response.data.email);
    }else{
      notifyerror("Invalid Credentials");
    }
    }).catch(()=>notifyerror("User is Required to Register First!"));
    console.log("data sent",userData);
  }

  export {handleCallbackResponse,handleSubmit};