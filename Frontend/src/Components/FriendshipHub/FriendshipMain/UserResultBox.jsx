import React, {useState} from 'react'

import boy from '../../../Assets/Images/boy.png';
import boy2 from '../../../Assets/Images/boy2.png';
import boy3 from '../../../Assets/Images/boy3.png';
import boy4 from '../../../Assets/Images/boy4.png';
import boy5 from '../../../Assets/Images/boy5.png';


import addUser from '../../../Assets/Icons/addUser.png'
import store from '../../../Store/store';



function UserResultBox(props) {


console.log(props);


const showModal = (id) => {
    console.log('inside showModal');
    connectHandler(id);
    props.showModalHandler();
    
}

async function connectHandler (id) {
    // const userId = "65a297b2b32acbfdbde8a217";
    const { login } = store.getState();
    const userId = login.id;
    const response = await fetch(
        "http://localhost:8000/api/friendshiphub/send",
        {
        method: "POST",
        body: JSON.stringify({
            userId: userId,
            receiverId: id,
        }),
        headers: {
            "Content-Type": "application/json"
        }
        }
    );
    
    const responseData = await response.json();

    console.log('response of ConnectHandler: ', responseData);

    props.searchHandler(); //check this
}


  return (
    
    <div className='bg-primary-200 w-full h-min-[30%] flex-column rounded-xl border-cyan-500 hover:border-2 box-content '>
        
        <img src={props.userNo == 0 ? boy2 : props.userNo == 1 ? boy3 : props.userNo == 2 ? boy4 : boy5 } alt='userImage' className='relative z-10 bg-[#6BB4C5] rounded-full
                    w-[70px] h-[70px] mt-3'
        />
        <div className='flex items-center justify-between w-full my-3 px-4'>
            <div>
                <h1 className='font-bold font-Inter'>{props.name}</h1>
                <h3 className='font-Inter italic text-sm'>{props.userName}</h3>
            </div>
            <div>
                <button className='flex-center  bg-cyan-700 hover:bg-cyan-500 rounded-lg px-2 py-1'
                onClick={()=> showModal(props.id)}
                >
                    <img src={addUser} alt='addUser Icon' className='h-[20px] w-[20px] mr-2' />
                    <span className='font-Itim  text-primary-100'>Connect</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default UserResultBox