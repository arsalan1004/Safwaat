import React from 'react'
import '../../App.css'
import LoginDialog from './LoginSignComp/loginDialog';

const Login = () => {
  return (
    <div className="contain">
    <div className="w-screen h-screen wrapper flex items-center">
      <div className="box w-screen h-[80vh]">
            <div className="absolute flex">
                <p className='max-[600px]:hidden type-log ml-[5vw] mr-[5vw] my-[6.4vh]'><span className='type-logHead my-[10vh]'>WELCOME BACK !</span><br /><br /> BEST TIME TO  <br />  RESUME YOUR  <br /> <span className='italic font-thin'>TAJWEED</span> JOURNEY <br /> WITH US</p> 
                <LoginDialog/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login