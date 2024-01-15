import React, { useEffect, useState } from 'react'
import userAcc from '../../Assets/Icons/userAcc.svg'
const Conversation = ({conversation, currentUser, lastMessage, onSetChat, reciever}) => {

  // Here will be the id of reciever(2nd member of conv) of conversation
  const [user, setUser] = useState({
    userId: "2",
    username: "Zain"
  });
  const lastMessageMaxLen = 30;

  // useEffect(() => {
  //   const friendId = conversation.members.filter(
  //     (m) => m !== currentUser.userId
  //   );
  //   const getFriend = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:8000/api/users/" + friendId[0]
  //       );
  //       setUser(res.data);
  //     } catch (error) {
  //       console.log(`get friend error ${error}`);
  //     }
  //   };
  //   getFriend();
  // }, [currentUser, conversation]);

  const setChatHandler = () => {
    console.log("chat set to: ", conversation);
    onSetChat(conversation || [])
  }

  return (
    <div 
      onClick={setChatHandler} 
      className='py-2 border-b-[1px] border-b-[#D3D3D3] cursor-pointer'
    >
      <div className='flex px-2 gap-x-3 '>
      <div className='w-[15%]'>
          <img 
            src={userAcc}
            alt='friend-profile-image' 
            width={45} height={45}  
          />
      </div>
        <div className='flex flex-col justify-between w-[70%]'>
          <h1 className='text-[17px] font-medium'>{reciever || "No User"}</h1>
          <p className='font-thin text-[12px] text-slate-500'> 
            { 
             
              "No Message"
            }
          </p>
        </div>
        
          <div className='w-[10%] font-thin text-[12px] text-slate-500 leading-[20px]'>
            <time>{lastMessage.time}</time>
          </div>  
 
        
      </div>
    </div>
  )
}

export default Conversation;

 {/* lastMessage?.text.length > lastMessageMaxLen ? 
              lastMessage?.text.slice(0, lastMessageMaxLen) + "..."  :
              lastMessage.text */}