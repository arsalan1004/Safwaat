import React from 'react'
import boy2 from '../../../../Assets/Images/boy2.png';
import classes from './FriendBox.module.css';
import { Link } from 'react-router-dom';

function FriendBox(props) {
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


    return (
    
        <div className='bg-primary-200 w-full h-auto px-6 py-3 
        flex items-center  border-b-[1px] border-b-slate-400'
        
        >
        {/* 2 Inner divs so that flex between can be applied */}
        
        {/* User Image and Private Detail */}
        <div className='flex items-center w-3/6'>
            {/* Image */}
            <div>
                <img src={boy2} alt='userImage' className='relative z-10 bg-[#6BB4C5] rounded-full
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
        <div className='flex-center w-1/6'>
           
            {/* <div className='flex items-start text-center mt-5 text-Poppins'>
                    <div className='py-0 pr-4 border-r-slate-400 border-r-[1px]'>
                        <h3 className='mb-1 text-slate-500 font-medium'>LEVEL</h3>
                        <p className='text-sm text-slate-500'>10</p>
                    </div>
                    <div className='py-0 px-4'>
                        <h3 className='mb-1 font-medium text-slate-500'>XP</h3>
                        <p className='text-sm text-slate-500' >1255 </p>
                    </div>
                   
                </div> */}
    
            <div className='w-full'>
                <p className='flex justify-between mb-1'>
                <span className='font-medium'>LEVEL:</span>
                <span>4</span>
                </p>
                <p className='flex justify-between'>
                <span className='font-medium'>XP:</span>
                <span>1300</span>
                </p>
            </div>
        </div>

        {/* buttons */}
        <div className='flex flex-col justify-center items-end gap-2 w-2/6'>
            {
                buttonStyling.map(
                    (butStyle, i) => (
                        <Link to=''>
                            <button className={classes.Button}
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
                        </Link>
                    )
                )
            }
 
        </div>
             
    </div>
  )
}

export default FriendBox