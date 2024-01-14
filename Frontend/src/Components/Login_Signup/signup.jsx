import React from 'react'
import SignDialog from './LoginSignComp/signupDialog';


const Signup = () => {
  return (
    <div className="contain">
    <div className="w-screen h-screen wrapperSign">
            <div className="flex justify-center items-center">
                <SignDialog/>
    </div>
    </div>
    </div>
  )
}

export default Signup