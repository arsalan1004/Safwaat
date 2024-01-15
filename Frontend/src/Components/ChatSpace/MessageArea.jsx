import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import MessageAreaTop from './MessageAreaTop'
import Message from './Message'
import MessageTextArea from './MessageTextArea'
import style from './MessageArea.module.css'
import { getFriendData } from '../../API/chatSpaceApi'
const MessageArea = ({messages, user, handleMessageSubmit, currentChat}) => {
  const [freeHeight, setFreeHeight] = useState(0);
  const [friendName, setFriendName] = useState("");
  const scrollRef = useRef(null);
  const offsetRef = useRef(null);

    console.log("CURRENT CHAT IN MessageArea");
    console.log(currentChat)
  useLayoutEffect(() => {
    // run after the element is rendered
    // const offsetHeight = offsetRef.current.clientHeight; // get the element's height
    const viewportHeight = window.innerHeight; // get the viewport's height
    setFreeHeight(viewportHeight - 200); // calculate and set the free height
    console.log('useLayoutEffect Run')
    // console.log(`Offset: ${offsetHeight}`);
    console.log(`viewport: ${viewportHeight}`);
    // console.log(`Scroll Height(required): ${viewportHeight - (offsetHeight + 60)}`)
  }, []); 

  // scrollToBottom = () => {
  //   this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  // }
  useLayoutEffect(() => {
    console.log('scrollref UseEffect run')

   scrollToBottom();
  
  }, [messages]);



  const scrollToBottom = () => {
    scrollRef?.current.scrollIntoView({ behavior: "smooth"});
  }
  const messageSubmitHandler = (newMessage) => {
    handleMessageSubmit(newMessage);
  }
  
 

  useEffect(() => {

    const getFriendDataHandler = async() => {
      console.log(currentChat)
      const friendId = currentChat.members.filter(m => m !== user.userId)[0];
      console.log(`friendId: ${friendId}`)
      const response =  await getFriendData(friendId)
      setFriendName(response.username);
    }
    getFriendDataHandler()
  },[currentChat])
  return (
    <section className='w-[70%] min-w-[460px] bg-gradient-to-bl from-[#0D504A] via-[#4FA8A1] to-[#7AFAF0]'> 
      <MessageAreaTop receiver = {friendName}/>
      <div>
        <div 
        className={style['scroll-message']} 
                  style={{
                  maxHeight: `${freeHeight}px`, 
                  minHeight: `${freeHeight}px`,
                  padding: '16px'
                }}
           >
          {
            messages?.map((message,index) => 
              <Message 
                key = {index}
                message={message} 
                own={message?.sender === user.userId}
                type={'group'}
              />
            )
          }
          <div ref={scrollRef}></div>
        </div>
        <div className='flex justify-center items-center py-[4px] mt-[12px]'>
          <MessageTextArea 
            onMessageSubmit = {messageSubmitHandler} 
            user = {user}
          />
        </div>
      </div>
    </section>
  )
}

export default MessageArea