import React, { useState } from 'react'
import axios from 'axios';
import {toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";

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

const handleSubmit = (e)=>{
    e.preventDefault();
    const userData = {
      username: username,
      password: password
    };
    axios.post("http://localhost:8000/api/login", userData,{ withCredentials: true }).then((response) => {
      console.log(response);
      if(response.status==200){
        notifysucc(response.data.username);
      }else{
        notifyerror("Invalid Credentials");
      }
    }).catch((error)=>notifyerror("Invalid Credentials"));
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
    axios.post("http://localhost:8000/api/login/google", userData,{withCredentials:true}).then((response) => {
    console.log(response);
    if(response.status==200){
      notifysucc(response.data.email);
    }else{
      notifyerror("Invalid Credentials");
    }
    }).catch((error)=>notifyerror("Invalid Credentials"));
    console.log("data sent",userData);
  }

  export {handleCallbackResponse,handleSubmit};