import React from 'react'
import SignDialog from './LoginSignComp/signupDialog';


const Signup = () => {
  return (
    <div className="contain">
    <div className="w-screen h-screen wrapper flex items-center">
        <div className="box w-screen h-[80vh]">
            <div className="flex justify-center items-center">
                <SignDialog/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup