import React from 'react'
import boy2 from '../../../../Assets/Images/boy2.png';
import boy3 from '../../../../Assets/Images/boy3.png';
import boy4 from '../../../../Assets/Images/boy4.png';
import boy5 from '../../../../Assets/Images/boy5.png';
import boy6 from '../../../../Assets/Images/boy6.png';


import classes from './FriendBox.module.css';
import { useNavigate } from 'react-router-dom';
import store from '../../../../Store/store';
import { toast } from 'react-toastify';



function FriendBox(props) {

    const navigate= useNavigate();

    console.log('inside FriendBox Component')
    console.log(props.secNo);

    const button1Texts = ['View Profile', 'Accept' , 'View Profile'];
    const button2Texts = ['Message', 'Reject' , 'Cancel'];

    let buttonTexts = [
        button1Texts[props.secNo],
        button2Texts[props.secNo]
    ]

    const buttonStyling = [
        //styling for button 1
        {
            mainFriendBoxColor: `${props.secNo == 1 ? '#0ACF1E' : '#2c9caf'}`, //correct : blue
            hoverFriendBoxColor: `${props.secNo == 1 ? '#41E251' : '#70bdca'}`, //somewhere middle
            backgroundFriendBoxColor: `${props.secNo == 1 ? '#AAF491' : 'rgb(235, 241, 247)'}`, //light green
            boxFriendBoxShadowColor: `${props.secNo == 1 ? '#9FFC7F' : '#268391'}`, //lil darker than light green
            hoverFriendBoxText: `${props.secNo == 1 ? '#B9F6A4' : 'white'}`
        },
        //styling for button 2
        {
            mainFriendBoxColor: `${props.secNo == 0 ? '#2c9caf' : '#E01111'}`, // blue : wrong 
            hoverFriendBoxColor: `${props.secNo == 0 ? '#70bdca' : '#F33D3D'}`, //somewhere middle
            backgroundFriendBoxColor: `${props.secNo == 0 ? 'rgb(235, 241, 247)' : '#F98C8C'}`, //light red
            boxFriendBoxShadowColor: `${props.secNo == 0 ? '#268391' : '#F97777'}`, //lil darker than light red
            hoverFriendBoxText: `${props.secNo == 0 ? 'white' : '#FFBEBE'}`
        }
    ]

    const  buttonHandler = async (id, secNum, butText) => {
            console.log('BUTTON HANDLER!');
            console.log(id, secNum, butText);
           //  const userId = "65a297b2b32acbfdbde8a217";
           const { login } = store.getState();
           const userId = login.id;
            let response;

            if(secNum==0 && butText=='View Profile'){
                console.log('USER ID: ', id);
                navigate('/profile', { state: { userId: id } });

            }else if(secNum==0 && butText=='Message'){

                navigate('/chat/privatechat')

            }else if(secNum==1 && butText=='Accept'){
                
                response = await fetch(
                    "http://localhost:8000/api/friendshiphub/accept",
                    {
                    method: "POST",
                    body: JSON.stringify({
                        userId: userId,
                        senderId: id,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                    }
                );
                
                const responseData = await response.json();
            
                console.log('response of AcceptHandler: ', responseData);
                
                props.fetchSectionDataHandler(secNum);

                toast('You have Accepted the Friend Request');

            }
            else if(secNum==1 && butText=='Reject'){

                response = await fetch(
                    "http://localhost:8000/api/friendshiphub/reject",
                    {
                    method: "POST",
                    body: JSON.stringify({
                        userId: userId,
                        senderId: id,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                    }
                );
                
                const responseData = await response.json();
            
                console.log('response of Reject Handler: ', responseData);
                
                props.fetchSectionDataHandler(secNum);

                toast('Friend Request Declined')

            }else if(secNum==2 && butText=='View Profile'){
                
                navigate('/profile');

            }else if(secNum==2 && butText=='Cancel'){ 

                response = await fetch(
                    "http://localhost:8000/api/friendshiphub/cancel",
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
            
                console.log('response of CancelHandler: ', responseData);
                
                props.fetchSectionDataHandler(secNum);
                toast('Friend Request Cancelled');

            }
            else{
                console.log('WRONG OPTION!!!');
            }

    }

    return (
    
        <div className='bg-primary-200 w-full h-auto px-6 py-3 
        flex items-center  border-b-[1px] border-b-slate-400'
        
        >
        {/* 2 Inner divs so that flex between can be applied */}
        
        {/* User Image and Private Detail */}
        <div className='flex items-center w-[40%]'>
            {/* Image */}
            <div>
                <img src={props.userNo == 0 ? boy2 : props.userNo == 1 ? boy3 : props.userNo == 2 ? boy4 : props.userNo == 3 ? boy5 : boy6 } alt='userImage' className='relative z-10 bg-[#6BB4C5] rounded-full
                            w-[70px] h-[70px] mt-3'
                />
            </div> 
                {/* UserName and Name */}
            <div className='ml-7 flex-col items-center'>
                <h1 className='font-bold font-Inter mb-1'>{props.name}</h1>
                <h3 className='font-Inter italic text-sm'>{props.userName}</h3>
            </div>
        </div>
        
        {/* Level Detail */}
        <div className='flex-center w-[25%]'>
           
            <div className='flex items-start text-center mt-0 text-Poppins'>
                    <div className='py-0 pr-6 border-r-slate-400 border-r-[1px]'>
                        <h3 className='mb-1 text-slate-500 font-medium'>LEVEL</h3>
                        <p className='text-sm text-slate-500'>{props.level}</p>
                    </div>
                    <div className='py-0 px-6'>
                        <h3 className='mb-1 font-medium text-slate-500'>XP</h3>
                        <p className='text-sm text-slate-500' >{props.xp} </p>
                    </div>
                   
                </div>
    
            {/* <div className='w-full'>
                <p className='flex justify-between mb-1'>
                <span className='font-medium'>LEVEL:</span>
                <span>{props.level}</span>
                </p>
                <p className='flex justify-between'>
                <span className='font-medium'>XP:</span>
                <span>{props.xp}</span>
                </p>
            </div> */}
        </div>

        {/* buttons */}
        <div className='flex flex-col justify-center items-end gap-2 w-[35%]'>
            {
                buttonStyling.map(
                    (butStyle, i) => (
                            <button className={classes.Button}
                            onClick={()=> buttonHandler(props.id, props.secNo, buttonTexts[i]) }
                            key={i}
                            style={{
                                '--main-FriendBox-color': butStyle.mainFriendBoxColor, 
                                '--hover-FriendBox-color': butStyle.hoverFriendBoxColor, 
                                '--background-FriendBox-color': butStyle.backgroundFriendBoxColor, 
                                '--box-FriendBox-shadow-color': butStyle.boxFriendBoxShadowColor, 
                                '--hover-FriendBox-text': butStyle.hoverFriendBoxText
                            }}
                            >
                                {buttonTexts[i]}

                            </button>
                    )
                )
            }
 
        </div>
             
    </div>
  )
}

export default FriendBox