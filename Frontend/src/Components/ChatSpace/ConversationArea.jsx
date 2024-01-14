import React, { useLayoutEffect, useRef, useState } from 'react'
import ChatModeButton from './ChatModeButton'
import Conversation from './Conversation'
import chatBubble from '../../Assets/Icons/chatBubble.svg';
import group from '../../Assets/Icons/group.svg'
import searchMagnifier from '../../Assets/Icons/searchMagnifier.svg'
import newChatBubble from '../../Assets/Icons/newChatBubble.svg'
import style from './Conversation.module.css'
import { Navigate, useNavigate } from 'react-router-dom';
import SearchConversationBar from './SearchConversationBar';
// Holds ChatModeButtons
// Holds multiple conversation mapped from object received from chatSpace

// NOTE: arsalan used singular for whole conversation array
// i am using plural

// setChatHandler -> setChat in PrivateChat






const ConversationArea = ({conversations, user, setChatHandler}) => {
  
  const [chatMode, setChatMode] = useState("Chat");
  const [freeHeight, setFreeHeight] = useState(0);
  const [searchAppear, setSearchAppear] = useState(true);
  const [search, setSearch] = useState("");

  const offsetRef = useRef(null);
  const searchBarRef = useRef(null);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    // run after the element is rendered
    const offsetHeight = offsetRef.current.clientHeight; // get the element's height
    const viewportHeight = window.innerHeight; // get the viewport's height
    
    if(searchAppear == false) {
      setFreeHeight(viewportHeight - (offsetHeight + 60)); // calculate and set the free height
    }
    else {
      console.log('here');
      setFreeHeight(viewportHeight - (offsetHeight + searchBarRef.current.clientHeight + 60));
    }

    console.log(`Offset: ${offsetHeight}`);
    console.log(`viewport: ${viewportHeight}`);
    console.log(`Scroll Height(required): ${viewportHeight - (offsetHeight + 62)}`);


  }, [searchAppear]); 
   
  const onSetChat = (conversation) => {
    setChatHandler(conversation)
  }

  const setChatModeHandler = (mode) => {
    setChatMode(mode);
  }


  return (
    <section className='bg-primary-100 w-[30%] font-Roboto conversation-shadow-right' >
      <div >
        <div className='flex justify-evenly items-center w-[99.8%]' id='scroll-offset' ref={offsetRef}
        style={{
          outline: "#D3D3D3 solid 1px"
        }}
        >
          <ChatModeButton
            img={chatBubble}
            dimensions = {30}
            altText={'private-chat'}
            handler={() => navigate("/Chat/PrivateChat")}
          />
          <ChatModeButton
            img={group}
            dimensions = {40}
            altText={'group-chat'}
            handler={() => navigate("/Chat/GroupChat")}
          />
          <ChatModeButton
            img={newChatBubble}
            dimensions = {40}
            altText={'new-chat'}
            handler={() => {}}
          />
          <ChatModeButton
            img={searchMagnifier}
            dimensions = {30}
            altText={'search-icon'}
            handler={() => setSearchAppear((sA) => !sA)}
          />
        </div>
        {  searchAppear &&
            <div 
              className='bg-[#6bb4c5]'
              ref = {searchBarRef}
            >
              <SearchConversationBar 
                search={search}
                setSearch={setSearch}
              />
            </div>
        }
        
        <div className=' bg-primary-100'>
          <div  className={style['scrollStyle']} 
                style={{
                maxHeight: `${freeHeight}px`, 
                minHeight: `${freeHeight}px`,
              }}
            >
         
            {
              (conversations.filter((conv) => 
                ((conv.lastMessage.text).toLowerCase()).includes(search.toLowerCase())))
                .map((conversation, index) =>
                    <Conversation 
                      key = {index}
                      conversation = {conversation}
                      currentUser = {user}
                      lastMessage = { conversation.lastMessage ||"No Usersssssssssssssssssssssssssssssssssss"}
                      onSetChat = {onSetChat}
                    />
                  )
              
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default ConversationArea

{/* conversations?.map(conversation =>
          <Conversation 
            conversation = {conversation}
            currentUser = {user}
            lastMessage = {"No last Message"}
            onSetChat = {onSetChat}
          />
        ) */}